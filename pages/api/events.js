const generateRecurringEvents = (title, daysOfWeek, bgColor) => {
  const start = new Date(2023, 7, 14);
  const end = new Date(2024, 5, 30);

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
    const carromsChess = generateRecurringEvents('Carroms & Chess', [1], '#9F0D7F');
    const badminton = generateRecurringEvents('Badminton', [3, 5], '#9F0D7F');
    const running = generateRecurringEvents('Running', [4], '#9F0D7F');
    const familyYoga = generateRecurringEvents('Family Yoga', [6], '#9F0D7F');

    const holidayPeriods = [
        { start: new Date(2023, 9, 14), end: new Date(2023, 9, 22), title: 'Autumn', resource: '#61677A' },
        { start: new Date(2023, 11, 20), end: new Date(2024, 0, 7), title: 'New Year and Christmas', resource: '#61677A' },
        { start: new Date(2024, 1, 17), end: new Date(2024, 1, 25), title: 'Winter', resource: '#61677A' },
        { start: new Date(2024, 2, 23), end: new Date(2024, 3, 1), title: 'Easter', resource: '#61677A' },
        { start: new Date(2024, 4, 9), end: new Date(2024, 4, 12), title: 'Ancension', resource: '#61677A' },
        { start: new Date(2024, 4, 18), end: new Date(2024, 4, 20), title: 'Whitsun', resource: '#61677A' },
        { start: new Date(2024, 5, 5), end: new Date(2024, 5, 5), title: 'Constitution Day', resource: '#61677A' },
        { start: new Date(2024, 5, 29), end: new Date(2024, 5, 30), title: 'Summer', resource: '#61677A' }
    ];

    const celebrations = [
        { start: new Date(2023, 10, 11), end: new Date(2023, 10, 11), title: 'Diwali', resource: '#FBA1B7' },
        { start: new Date(2024, 0, 13), end: new Date(2024, 0, 13), title: 'Pongal', resource: '#FBA1B7' }
    ];

    const tournaments = [
        { start: new Date(2024, 2, 16), end: new Date(2024, 2, 16), title: 'Carroms Tournament', resource: '#FFC436' },
        { start: new Date(2024, 3, 27), end: new Date(2024, 3, 27), title: 'Badminton Tournament', resource: '#FFC436' },
        { start: new Date(2024, 5, 15), end: new Date(2024, 5, 15), title: 'Family Sports Day', resource: '#FFC436' }
    ];

    // Combine all events and filter out overlapping events with holiday periods, celebrations, and tournaments
    const allEvents = [
        ...carromsChess,
        ...badminton,
        ...running,
        ...familyYoga,
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
