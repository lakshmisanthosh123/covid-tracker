

declare module 'react-plotly.js' {
    import { Component } from 'react';
    import { Layout, PlotlyHTMLElement } from 'plotly.js';
  
    interface PlotProps {
      data: any[];
      layout?: Layout;
      config?: any;
      onInitialized?: (figure: PlotlyHTMLElement) => void;
      onUpdate?: (figure: PlotlyHTMLElement) => void;
    }
  
    export default class Plot extends Component<PlotProps> {}
  }
  