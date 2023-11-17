module.exports = {
    docs: {
        About: [
            'about/about_index',
            'about/about_contributing',
            'about/about_code_of_conduct'
        ],
        Overview: [
            'overview/overview_index',
            'overview/overview_installation',
            'overview/overview_usage',
            {
                type: 'category',
                label: 'Elastic Query',
                items: [
                    'overview/elastic_query',
                    'overview/queries/elastic_query_bool',
                    'overview/queries/elastic_query_constant_score',
                    'overview/queries/elastic_query_disjunction_max',
                    'overview/queries/elastic_query_exists',
                    'overview/queries/elastic_query_function_score',
                    'overview/queries/elastic_query_fuzzy',
                    'overview/queries/elastic_query_geo_distance',
                    'overview/queries/elastic_query_has_child',
                    'overview/queries/elastic_query_has_parent',
                    'overview/queries/elastic_query_match',
                    'overview/queries/elastic_query_match_all',
                    'overview/queries/elastic_query_match_boolean_prefix',
                    'overview/queries/elastic_query_match_phrase',
                    'overview/queries/elastic_query_match_phrase_prefix',
                    'overview/queries/elastic_query_multi_match',
                    'overview/queries/elastic_query_nested',
                    'overview/queries/elastic_query_prefix',
                    'overview/queries/elastic_query_range',
                    'overview/queries/elastic_query_regexp',
                    'overview/queries/elastic_query_term',
                    'overview/queries/elastic_query_terms',
                    'overview/queries/elastic_query_terms_set',
                    'overview/queries/elastic_query_wildcard',
                    'overview/queries/elastic_query_ids',
                ],
            },
            {
                type: 'category',
                label: 'Elastic Aggregation',
                items: [
                    'overview/elastic_aggregation',
                    'overview/aggregations/elastic_aggregation_avg',
                    'overview/aggregations/elastic_aggregation_bucket_selector',
                    'overview/aggregations/elastic_aggregation_bucket_sort',
                    'overview/aggregations/elastic_aggregation_cardinality',
                    'overview/aggregations/elastic_aggregation_extended_stats',
                    'overview/aggregations/elastic_aggregation_filter',
                    'overview/aggregations/elastic_aggregation_max',
                    'overview/aggregations/elastic_aggregation_min',
                    'overview/aggregations/elastic_aggregation_missing',
                    'overview/aggregations/elastic_aggregation_percentiles',
                    'overview/aggregations/elastic_aggregation_stats',
                    'overview/aggregations/elastic_aggregation_sum',
                    'overview/aggregations/elastic_aggregation_terms',
                    'overview/aggregations/elastic_aggregation_value_count',
                    'overview/aggregations/elastic_aggregation_weighted_avg',
                ],
            },
            {
                type: 'category',
                label: 'Elastic Request',
                items: [
                    'overview/elastic_request',
                    'overview/requests/elastic_request_aggregate',
                    'overview/requests/elastic_request_bulk',
                    'overview/requests/elastic_request_count',
                    'overview/requests/elastic_request_create',
                    'overview/requests/elastic_request_create_index',
                    'overview/requests/elastic_request_delete_by_id',
                    'overview/requests/elastic_request_delete_by_query',
                    'overview/requests/elastic_request_delete_index',
                    'overview/requests/elastic_request_exists',
                    'overview/requests/elastic_request_get_by_id',
                    'overview/requests/elastic_request_refresh',
                    'overview/requests/elastic_request_search',
                    'overview/requests/elastic_request_update',
                    'overview/requests/elastic_request_update_by_query'
                ],
            },
            'overview/overview_zio_prelude_schema',
            'overview/overview_elastic_executor',
            'overview/overview_fluent_api',
            'overview/overview_bulkable',
            'overview/overview_streaming',
        ],
    },
};
