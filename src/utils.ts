const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
});

export const formatDate = (date: string) =>
    dateFormatter.format(new Date(date.includes('T') ? date : `${date}T00:00:00Z`));
