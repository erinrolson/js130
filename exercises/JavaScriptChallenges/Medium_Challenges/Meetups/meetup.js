/*
Practicing writing a PEDAC for the Meetups challenge:

Input: String (day of the week), String (descriptor of which day the meetup will
take place on)
Output: String (representation of a date object)
Rules:
  - return a date formatted as a string representing the actual date the meetup
    will occur on based on the weekday provided and the descriptor of which
    weekday to choose
  - 'first' choose the first instance
  - 'second' choose the seconde instance
  - 'third' choose the third instance
  - 'fourth' choose the fourth  instance
  - 'fifth' choose the fifth instance, if the month has one
  - 'last' choose the last instance
  - 'teenth' choose the weekday match that ends whose date ends with 'teenth'
  - day of the week input not case sensitive

Mental Model:
Arguments: ('Monday', 'first')

Data Structure:
Days that end in 'teenth' (Array) -> [13, 14, 15, 16, 17, 18, 19]
Days of the week (Array) -> ['sunday','monday', 'tuesday', 'wednesday',
'thursday', 'friday', 'saturday']
Descriptors (Object) -> {'first' : 1, 'second' : 2, 'third' : 3, 'fourth' : 4,
'fifth' : 5}

Algorithm:
    - force arguments to lowercase and reassign
    - declare date init to 1
    - declare counter init to 0
    - declare dateObj init to create a date object for the instance month and
      year and date variable

    - if descriptor is 'teenth'
      - declare constant teenth to array of teenth day values
      - iterate over array of 'teenth' days
        - create a date object using the instance month and year and the teenth
          day
        - if date object day is a match for day of the week
          - return a string representation of the date
        - else go to the next iteration and, create a new date and check again.

    - if descriptor is 'last'
      - declare maxDays init to max number of days in the instance month
      - declare last
      - start iteration starting at 1 and using maxDays to control loop
        - create a date object with the instance year, month, and iteration num
         as day
        - if date is a match for weekday assign to last
      - return string representation of last

    *** make sure to test how this behaves for months without 5 days....***
    - start iteration
      - use getDay to determine the day of the week of date object
      - if the same value as the index position of the weekday name
        - increment counter by one
        - if counter same as descriptor associated value
          - return the date as a string
      - else
        - increment date by 1
        - reassign dateObj to new date using new date value
*/

class Meetup {
  static DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday'];
  static DESCRIPTORS = {first : 1, second : 2, third : 3, fourth : 4, fifth : 5}

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }


  day(weekDay, descriptor) {
    weekDay = weekDay.toLowerCase();
    descriptor = descriptor.toLowerCase();

    if (descriptor === 'teenth') return this._teenth(weekDay);

    if (descriptor === 'last') return this._last(weekDay);

    let counter = 0;
    let maxDays = new Date(this.year, this.month + 1, 0).getDate();

    for (let date = 1; date <= maxDays; date++) {
      let dateObj = new Date(this.year, this.month, date);
      if (dateObj.getDay() === Meetup.DAYS_OF_WEEK.indexOf(weekDay)) {
        counter += 1;
        if (counter === Meetup.DESCRIPTORS[descriptor]) {
          return dateObj.toString();
        }
      }
    }
    return null;
  }

  _teenth(weekDay) {
    const TEENTH_DAYS = [13, 14, 15, 16, 17, 18, 19];

    for (let idx = 0; idx < TEENTH_DAYS.length; idx++) {
      let dateObj = new Date(this.year, this.month, TEENTH_DAYS[idx]);
      if (dateObj.getDay() === Meetup.DAYS_OF_WEEK.indexOf(weekDay)) {
        return dateObj.toString();
      }
    }
    return null;
  }

  _last(weekDay) {
    let day = 1;
    let dateObj = new Date(this.year, this.month, day);
    let last;

    while (dateObj.getMonth() === this.month) {
      if (dateObj.getDay() === Meetup.DAYS_OF_WEEK.indexOf(weekDay)) {
        last = dateObj;
      }
      day++;
      dateObj = new Date(this.year, this.month, day);
    }
    return last.toString();
  }
}

module.exports = Meetup;

