export function gqClient() {
  const state: {
    $select: string[];
    $filter: string[];
    $orderby: string[];
    $top: number | null;
    $skip: number | null;
    $expand: string[];
    $apply: string | null;
  } = {
    $select: [],
    $filter: [],
    $orderby: [],
    $top: null,
    $skip: null,
    $expand: [],
    $apply: null
  };

  const encodeValue = (v: string | number | boolean): string =>
    typeof v === 'string' ? `'${v}'` : String(v);

  const api = {
    select(fields: string) {
      state.$select.push(...fields.split(',').map(f => f.trim()));
      return api;
    },
    filter(field: string, op: string, value: string | number | boolean) {
      state.$filter.push(`${field} ${op} ${encodeValue(value)}`);
      return api;
    },
    and() {
      state.$filter.push('and');
      return api;
    },
    or() {
      state.$filter.push('or');
      return api;
    },
    orderby(expr: string) {
      state.$orderby.push(expr.trim());
      return api;
    },
    top(n: number) {
      state.$top = n;
      return api;
    },
    skip(n: number) {
      state.$skip = n;
      return api;
    },
    expand(table: string, opts: { select?: string } = {}) {
      if (opts.select) {
        state.$expand.push(`${table}($select=${opts.select})`);
      } else {
        state.$expand.push(table);
      }
      return api;
    },
    apply(groupby: string[] = [], aggregates: [string, string, string][] = []) {
      const g = groupby.join(',');
      const a = aggregates.map(([field, fn, alias]) =>
        `${field} with ${fn} as ${alias}`
      ).join(', ');
      state.$apply = `groupby((${g}), aggregate(${a}))`;
      return api;
    },
    toString(): string {
      const q: string[] = [];
      if (state.$select.length) q.push(`$select=${state.$select.join(',')}`);
      if (state.$filter.length) q.push(`$filter=${state.$filter.join(' ')}`);
      if (state.$orderby.length) q.push(`$orderby=${state.$orderby.join(',')}`);
      if (state.$top !== null) q.push(`$top=${state.$top}`);
      if (state.$skip !== null) q.push(`$skip=${state.$skip}`);
      if (state.$expand.length) q.push(`$expand=${state.$expand.join(',')}`);
      if (state.$apply) q.push(`$apply=${state.$apply}`);
      return q.join('&');
    },
    toURL(base: string): string {
      const qs = api.toString();
      return base + (qs ? (base.includes('?') ? '&' : '?') + qs : '');
    }
  };

  return api;
}