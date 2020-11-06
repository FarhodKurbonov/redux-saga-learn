import * as React from 'react';

export interface INumberViewerComponentOwnProps {
  numberCollection?: number[];
}

export const NumberViewerComponent: React.FunctionComponent<INumberViewerComponentOwnProps> = ({numberCollection}) => (
  <>
    <h5>Generated numbers collection:</h5>
    <ul>
      {numberCollection.map(currentNumber => (
        <li key={currentNumber}>{currentNumber}</li>
      ))}
    </ul>
  </>
);
