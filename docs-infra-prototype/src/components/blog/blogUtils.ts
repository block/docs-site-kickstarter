export function formatDate(date:Date){
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }