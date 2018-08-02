import React from "react";
import { Message } from "semantic-ui-react";

import Bracket from "./Bracket";
import "./index.css";
import parseStats from './parseStats';

export default props => {
  if (!props.stats) {
    return (
      <Message>Waiting for Tournament Stats...</Message>
    );
  }
  const data = parseStats(props.stats);
  return (
    <div>
      {data.map((bracket, $index) => (
        <div className="tournament-bracket" key={ bracket.match.uuid }>
            <Bracket
              finished={ props.stats.finished }
              item={bracket}
              key={$index}
              totalGames={ props.stats.options.numberOfGames }
            />
        </div>
      ))}
    </div>
  );
};
