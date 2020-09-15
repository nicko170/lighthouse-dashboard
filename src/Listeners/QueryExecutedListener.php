<?php

namespace LighthouseDashboard\Listeners;

use LighthouseDashboard\Actions\StoreMetrics;
use Nuwave\Lighthouse\Events\ManipulateResult;

class QueryExecutedListener
{
    public function handle(ManipulateResult $result)
    {
        $tracing = $result->result->extensions['tracing'];
        $resolvers = $tracing['execution']['resolvers'];
        $request = request()->json()->all();

        // If it is a introspection request do nothing.
        if (count($resolvers) == 0) {
            return;
        }

        StoreMetrics::dispatchAfterResponse($request, $tracing);
    }
}
