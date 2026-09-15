import React from 'react';
import { ChartFrame } from './ChartFrame.jsx';
import { LineChart } from './LineChart.jsx';
import { BarChart } from './BarChart.jsx';
import { DonutChart } from './DonutChart.jsx';
import { ScatterPlot } from './ScatterPlot.jsx';
import { Heatmap } from './Heatmap.jsx';
import { HexHeatmap } from './HexHeatmap.jsx';
import { Sparkline } from './Sparkline.jsx';

/* One visualization API for the whole product. The renderer tier is an implementation
   detail the user never sees:
     standard  -> shadcn Charts + Recharts      (line, area, bar, donut, scatter, sparkline)
     advanced  -> Apache ECharts                (heatmap, calendar, treemap, sunburst, sankey, graph, large scatter)
     native    -> visx                          (hive, constellation, topology, fingerprint, hex anything)
     realtime  -> uPlot                         (dense telemetry, thousands of points)
   Every tier consumes LAMP tokens and renders inside ChartFrame. */
export const VIZ_TIERS = {
  line: 'standard', area: 'standard', bar: 'standard', hbar: 'standard', stackedBar: 'standard', normalizedBar: 'standard',
  histogram: 'standard', donut: 'standard', gauge: 'standard', scatter: 'standard', sparkline: 'standard',
  heatmap: 'advanced', calendar: 'advanced', treemap: 'advanced', sunburst: 'advanced', sankey: 'advanced', graph: 'advanced', parallel: 'advanced',
  hive: 'native', constellation: 'native', topology: 'native', fingerprint: 'native',
  telemetry: 'realtime',
};

const RENDER = {
  line: (p) => <LineChart {...p} />,
  area: (p) => <LineChart variant="area" {...p} />,
  bar: (p) => <BarChart {...p} />,
  hbar: (p) => <BarChart orientation="horizontal" showValues {...p} />,
  stackedBar: (p) => <BarChart stacked {...p} />,
  normalizedBar: (p) => <BarChart stacked normalized {...p} />,
  histogram: (p) => <BarChart barGap={1} {...p} />,
  donut: (p) => <DonutChart {...p} />,
  gauge: (p) => <DonutChart gauge {...p} />,
  scatter: (p) => <ScatterPlot {...p} />,
  sparkline: (p) => <Sparkline {...p} />,
  heatmap: (p) => <Heatmap {...p} />,
  calendar: (p) => <Heatmap cellSize={11} {...p} />,
  hive: (p) => <HexHeatmap {...p} />,
};

export const Viz = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Viz({ type = 'line', title, subtitle, legend, legendVariant, footnote, state = 'ready', height, actions, flush, config = {}, ...rest }, ref) {
  const render = RENDER[type];
  const chartState = state === 'ready' && !render ? 'error' : state;
  return (
    <ChartFrame ref={ref} title={title} subtitle={subtitle} legend={legend} legendVariant={legendVariant || (type === 'line' || type === 'area' ? 'line' : 'swatch')}
      footnote={footnote} state={chartState} height={height} actions={actions} flush={flush}
      errorLabel={render ? undefined : 'This visualization type renders on the ECharts or visx tier.'}>
      {render ? render({ ...config, ...rest }) : null}
    </ChartFrame>
  );
}), { displayName: 'Viz' });
