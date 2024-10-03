const generateRecurringEvents = (title, daysOfWeek, bgColor) => {
  const start = new Date(2024, 7, 14);
  const end = new Date(2025, 5, 30);

  const events = daysOfWeek.reduce((accumulator, dayOfWeek) => {
    const recurringEvents = Array.from(
      { length: Math.ceil((end - start) / (24 * 60 * 60 * 1000)) },
      (_, index) => {
        const date = new Date(start);
        date.setDate(date.getDate() + index);
        return date.getDay() === dayOfWeek ? date : null;
      }
    ).filter(date => date !== null).map(date => ({
      start: new Date(date),
      end: new Date(date),
      title,
      resource: bgColor,
    }));
    
    return accumulator.concat(recurringEvents);
  }, [])

  return events;
}

const handler = (req, res) => {
  if (req.method === 'GET') {
    const carroms = generateRecurringEvents('Carroms', [1], '#9F0D7F');
    const badminton = generateRecurringEvents('Badminton', [3, 5, 0], '#9F0D7F');
    const cricket = generateRecurringEvents('Indoor Cricket', [0], '#9F0D7F');
    const tableTennis = generateRecurringEvents('Table Tennis', [6], '#9F0D7F');

    const holidayPeriods = [
        { start: new Date(2024, 9, 14), end: new Date(2024, 9, 20), title: 'Autumn', resource: '#61677A' },
        { start: new Date(2024, 11, 23), end: new Date(2025, 0, 3), title: 'New Year and Christmas', resource: '#61677A' },
        { start: new Date(2025, 1, 17), end: new Date(2025, 1, 23), title: 'Winter', resource: '#61677A' },
        { start: new Date(2025, 3, 14), end: new Date(2025, 3, 20), title: 'Easter', resource: '#61677A' },
        { start: new Date(2025, 4, 29), end: new Date(2025, 4, 30), title: 'Ancension', resource: '#61677A' },
        { start: new Date(2025, 4, 18), end: new Date(2025, 4, 20), title: 'Whitsun', resource: '#61677A' },
        { start: new Date(2025, 5, 5), end: new Date(2025, 5, 5), title: 'Constitution Day', resource: '#61677A' },
        { start: new Date(2025, 5, 30), end: new Date(2025, 7, 8), title: 'Summer', resource: '#61677A' }
    ];

    
    const celebrations = [
        { start: new Date(2024, 10, 2), end: new Date(2024, 10, 2), title: 'Diwali', resource: '#FBA1B7' },
        { start: new Date(2025, 0, 11), end: new Date(2025, 0, 11), title: 'Pongal', resource: '#FBA1B7' },
        { start: new Date(2025, 2, 15), end: new Date(2025, 2, 15), title: 'Holi', resource: '#FBA1B7' },
        { start: new Date(2025, 5, 14), end: new Date(2025, 5, 14), title: 'DISA Family Day', resource: '#FFC436' }
    ];

    const tournaments = [
        { start: new Date(2025, 2, 1), end: new Date(2025, 2, 1), title: 'Carrom Tournament', resource: '#FFC436' },
        { start: new Date(2025, 3, 5), end: new Date(2025, 3, 5), title: 'Badminton Tournament', resource: '#FFC436' }
    ];

    // Combine all events and filter out overlapping events with holiday periods, celebrations, and tournaments
    const allEvents = [
        ...carroms,
        ...badminton,
        ...cricket,
        ...tableTennis,
    ];

    const filteredEvents = allEvents.filter((event) => {
        const isOverlappingWithHolidays = holidayPeriods.some((holiday) =>
        event.start >= holiday.start && event.start <= holiday.end
        );

        const isOverlappingWithCelebrations = celebrations.some((celebration) =>
        event.start >= celebration.start && event.start <= celebration.end
        );

        const isOverlappingWithTournaments = tournaments.some((tournament) =>
        event.start >= tournament.start && event.start <= tournament.end
        );

        return !(isOverlappingWithHolidays || isOverlappingWithCelebrations || isOverlappingWithTournaments);
    });

    // Combine the filtered events with holiday periods, celebrations, and tournaments
    const events = [
        ...filteredEvents,
        ...holidayPeriods,
        ...celebrations,
        ...tournaments,
    ];
        res.status(200).json(events);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default handler;
