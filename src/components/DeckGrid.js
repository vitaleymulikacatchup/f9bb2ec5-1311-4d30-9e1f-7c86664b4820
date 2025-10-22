import React from 'react';
import DeckColumn from './DeckColumn';

const DeckGrid = () => {
  const columns = [
    {
      title: 'Murloc Priest',
      color: 'bg-hs-gray',
      decks: [
        { rank: 1, name: 'Burn Elemental', winrate: '64.2%', games: '2.8k' },
        { rank: 2, name: 'Elemental Mage', winrate: '62.1%', games: '1.9k' },
        { rank: 3, name: 'Burn Elemental', winrate: '61.8%', games: '3.2k' },
        { rank: 4, name: 'Elemental Mage', winrate: '61.5%', games: '2.1k' },
        { rank: 5, name: 'Burn Elemental', winrate: '61.2%', games: '1.7k' },
        { rank: 6, name: 'Elemental Mage', winrate: '60.9%', games: '2.4k' },
        { rank: 7, name: 'Burn Elemental', winrate: '60.6%', games: '1.8k' },
        { rank: 8, name: 'Elemental Mage', winrate: '60.3%', games: '2.2k' },
        { rank: 9, name: 'Burn Elemental', winrate: '60.0%', games: '1.9k' },
        { rank: 10, name: 'Elemental Mage', winrate: '59.7%', games: '2.0k' }
      ],
      poweredBy: 'Powered by: Hsreplay, HS'
    },
    {
      title: 'Elemental Shaman',
      color: 'bg-hs-blue',
      decks: [
        { rank: 1, name: 'Aggro Shaman', winrate: '63.8%', games: '3.1k' },
        { rank: 2, name: 'Elemental Shaman', winrate: '62.5%', games: '2.7k' },
        { rank: 3, name: 'Burn Shaman', winrate: '61.9%', games: '2.3k' },
        { rank: 4, name: 'Aggro Shaman', winrate: '61.6%', games: '2.8k' },
        { rank: 5, name: 'Elemental Shaman', winrate: '61.3%', games: '2.1k' },
        { rank: 6, name: 'Burn Shaman', winrate: '61.0%', games: '1.9k' },
        { rank: 7, name: 'Aggro Shaman', winrate: '60.7%', games: '2.5k' },
        { rank: 8, name: 'Elemental Shaman', winrate: '60.4%', games: '2.2k' },
        { rank: 9, name: 'Burn Shaman', winrate: '60.1%', games: '2.0k' },
        { rank: 10, name: 'Aggro Shaman', winrate: '59.8%', games: '2.4k' }
      ],
      poweredBy: 'Powered by: 炉石传说盒子'
    },
    {
      title: 'Elemental Mage',
      color: 'bg-hs-cyan',
      decks: [
        { rank: 1, name: 'Burn Mage', winrate: '64.0%', games: '2.9k' },
        { rank: 2, name: 'Elemental Mage', winrate: '62.7%', games: '2.6k' },
        { rank: 3, name: 'Spell Mage', winrate: '61.8%', games: '2.2k' },
        { rank: 4, name: 'Burn Mage', winrate: '61.5%', games: '2.7k' },
        { rank: 5, name: 'Elemental Mage', winrate: '61.2%', games: '2.0k' },
        { rank: 6, name: 'Spell Mage', winrate: '60.9%', games: '1.8k' },
        { rank: 7, name: 'Burn Mage', winrate: '60.6%', games: '2.4k' },
        { rank: 8, name: 'Elemental Mage', winrate: '60.3%', games: '2.1k' },
        { rank: 9, name: 'Spell Mage', winrate: '60.0%', games: '1.9k' },
        { rank: 10, name: 'Burn Mage', winrate: '59.7%', games: '2.3k' }
      ],
      poweredBy: 'First Streamed: 炉石传说盒子'
    },
    {
      title: 'Paladin (?)'
    },
    {
      title: 'Elemental Mage',
      color: 'bg-hs-teal',
      decks: [
        { rank: 1, name: 'Aggro Paladin', winrate: '63.5%', games: '3.0k' },
        { rank: 2, name: 'Murloc Paladin', winrate: '62.2%', games: '2.5k' },
        { rank: 3, name: 'Secret Paladin', winrate: '61.7%', games: '2.1k' },
        { rank: 4, name: 'Aggro Paladin', winrate: '61.4%', games: '2.6k' },
        { rank: 5, name: 'Murloc Paladin', winrate: '61.1%', games: '1.9k' },
        { rank: 6, name: 'Secret Paladin', winrate: '60.8%', games: '1.7k' },
        { rank: 7, name: 'Aggro Paladin', winrate: '60.5%', games: '2.3k' },
        { rank: 8, name: 'Murloc Paladin', winrate: '60.2%', games: '2.0k' },
        { rank: 9, name: 'Secret Paladin', winrate: '59.9%', games: '1.8k' },
        { rank: 10, name: 'Aggro Paladin', winrate: '59.6%', games: '2.2k' }
      ],
      poweredBy: 'Powered by: 网易'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {columns.map((column, index) => (
        <DeckColumn key={index} {...column} />
      ))}
    </div>
  );
};

export default DeckGrid;