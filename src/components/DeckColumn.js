import React from 'react';

const DeckColumn = ({ title, color = 'bg-hs-gray', decks = [], poweredBy }) => {
  return (
    <div className="deck-column">
      <div className={`column-header ${color} text-white`}>
        {title}
      </div>
      
      {decks.length > 0 ? (
        <div className="space-y-1">
          {decks.map((deck, index) => (
            <div key={index} className="deck-item">
              <span className="deck-rank">{deck.rank}</span>
              <span className="deck-name">{deck.name}</span>
              <div className="deck-stats">
                <span className="winrate">{deck.winrate}</span>
                <span className="games">({deck.games})</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-hs-light-gray py-8">
          No data available
        </div>
      )}
      
      {poweredBy && (
        <div className="powered-by">
          {poweredBy}
        </div>
      )}
    </div>
  );
};

export default DeckColumn;