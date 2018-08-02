import React, {Fragment} from "react";

import Brackets from './Brackets';
import {Segment} from "semantic-ui-react";
import Match from "../Match";

export default (props) => {
    return (
        <div>
	        {
                (props.tournament.waiting || props.tournament.finished) &&
                <Fragment>
			        <h2>Bracket</h2>
			        <Brackets
				        stats={ props.tournament }
			        />
                </Fragment>
	        }
	        {
		        !(props.tournament.waiting || props.tournament.finished) &&
                <Fragment>
			        <h2>Playing</h2>
                    {
                        props.tournament.matches
                            .filter(match => match.stats.state === 'playing')
                            .map(match => (
                               <Fragment>
	                               <Segment>
		                               <Match
			                               playerA={match.players[0].token}
			                               playerB={match.players[1].token}
			                               winsA={match.stats.wins[0]}
			                               winsB={match.stats.wins[1]}
			                               gamesPlayed={match.stats.games}
			                               totalGames={props.tournament.options.numberOfGames}
			                               displayProgress
		                               />
	                               </Segment>
                               </Fragment>
                            ))
                    }
                </Fragment>
	        }
        </div>
    );
};
