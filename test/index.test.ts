import { describe, it, expect } from 'vitest';
import { gqClient } from '../src/index';




describe('gqClient', () => {
    it('builds a simple $filter query', () => {
        const query = gqClient()
            .filter(
                'age', 'gt', 30
            )
            .toString();
        expect(query).toBe(`$filter=age gt 30`);
    });

    it('builds $select and $orderby', () => {
        const query = gqClient()
            .select('name,email')
            .orderby('name desc')
            .toString();
        expect(query).toBe(`$select=name,email&$orderby=name desc`);
    });

    it(`builds full URL with base`, () => {
        const url = gqClient()
            .select('id')
            .top(5)
            .toURL('https://api.example.com/users');

        expect(url).toBe('https://api.example.com/users?$select=id&$top=5');
    });

    it('chains multiple filters with and/or', () => {
        const q = gqClient()
            .filter('age', 'gt', 18)
            .and()
            .filter('country', 'eq', 'AT')
            .toString();
        
        expect(q).toBe("$filter=age gt 18 and country eq 'AT'");
    });

    it('Handles $expand with $select', () => {
        const q = gqClient()
            .expand('orders', { select:'id,date' })
            .toString();
        
        expect(q).toBe(`$expand=orders($select=id,date)`);
    });

    it('Handles $apply (groupby + aggregate)', () => {
        const q = gqClient()
            .apply(['country'], [['age', 'avg', 'avg_age']])
            .toString();
        expect(q).toBe(`$apply=groupby((country), aggregate(age with avg as avg_age))`);
    });
});