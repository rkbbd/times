# times

<img src="https://coders-destination.blogspot.com/favicon.ico" />  
times is a javascript library for calculate difference between two dates in years, months, day etc. and display dates and times in different format.

### Installation
We suggest all to include this plug-in after loading Dom.


```javascript
alertBox.success('Success Message');
```

### Browser support
all javascript supported/enabled browser are supported.

### Demo
Check out the documentation at https://github.com/rkbbd/times/tree/master/beta%200.0.10

### Documentation
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


<br><br>
## DateDiff
To calculate the difference between two dates in years, months, day etc.


##### 1. Difference between two dates:
```javascript
let res = times.dateDiff('05/15/2021 05:30:30 pm', '05/16/2021 05:30:30 pm')

let years = res.diff.y;
let month = res.diff.mo; 
let days = res.diff.d;
let hours = res.diff.h;
let minutes = res.diff.m; 
let = seconds = res.diff.s;
```

##### 2. Difference from today:
```javascript
let res = times.dateDiff('05/15/2021')
```


##### 3. Difference between two dates [in total]
```javascript
let res = times.dateDiff('05/15/2021 05:30:30 pm', '05/16/2021 05:30:30 pm')

let years = res.diff.y;
let month = res.diff.MO; 
let days = res.diff.D;
let hours = res.diff.H;
let minutes = res.diff.M; 
let = seconds = res.diff.S;
```

##### 4. Real time changing
```javascript
function example_3() {
    let Date = document.getElementById('ex3_Date').value;
    let res = times.dateDiff(Date)
    let result = res.diff.y + " years " + res.diff.mo + " months " + res.diff.d + " days " + res.diff.h + " hours " + res.diff.m + " minutes " + + res.diff.s + " seconds.";
    document.getElementById('ex3_display').innerHTML = result;
    var refresh = 1000;
    setTimeout('example_3()', refresh)
}
```

##### 5. Difference from [today + add_day]:
```javascript
let res = times.add_day(day).dateDiff('05/15/2021');
```

<br><br>

## Date Formats
The following table describes various DateTime formats and their results.

**Year**
- y-> Year, no leading zero (e.g. 2005 would be 5)
- yy-> Year, leading zero (e.g. 2005 would be 05)
- yyy-> Year, (e.g. 015)
- yyyy-> Year, (e.g. 2015)

**Month**
- M-> Month number(eg.3)
- MM-> Month number with leading zero(eg.04)
- MMM-> Abbreviated Month Name (e.g. Dec)
- MMMM-> Full month name (e.g. December)

**Day**
- d -> Represents the day of the month as a number from 1 through 31.
- dd -> Represents the day of the month as a number from 01 through 31.
- ddd-> Represents the abbreviated name of the day (Mon, Tues, Wed, etc).
- dddd-> Represents the full name of the day (Monday, Tuesday, etc).

**Hour**
- h-> 12-hour clock hour (e.g. 4).
- hh-> 12-hour clock, with a leading 0 (e.g. 06)
- H-> 24-hour clock hour (e.g. 15)
- HH-> 24-hour clock hour, with a leading 0 (e.g. 22)

**Minute**
- m-> Minutes
- mm-> Minutes with a leading zero

**Second**
- s-> Seconds
- ss-> Seconds with leading zero

**abbr**
- t-> Abbreviated AM / PM (e.g. A or P)
- tt-> AM / PM (e.g. AM or PM

##### 1. Datetime format:
```javascript
let res = times.format('05/15/2021', 'dd/MMMM/yyyy h:m:s tt').date;
```
##### 2. Todays DateTime:
```javascript
let res = times.format('dd/MMMM/yyyy h:m:s tt').date;
```
##### 3. UTC Datetime :
```javascript
let utc_res = times.Utc(true).format("dd/MMMM/yyyy h:m:s tt").date;
```
##### 4. Day Add [today + add_day]:
```javascript
let res = times.add_day(day).format('dd/MMMM/yyyy h:m:s tt').date;
let utc_res = times.Utc(true).add_day(day).format("dd/MMMM/yyyy h:m:s tt").date; //Utc time set globally
times.Utc(false);
```
##### 4. Support multiple type date as input:
```javascript
times.format('05/15/2021 05:30:30 pm', 'dd/MMMM/yyyy h:m:s tt').date
times.format('Mar 25 2015', 'dd/MMMM/yyyy h:m:s tt').date
times.format("25 Mar 2015", 'dd/MMMM/yyyy h:m:s tt').date
times.format("2015-03-25", 'dd/MMMM/yyyy h:m:s tt').date
times.format("Wed Mar 25 2021 06:00:00 GMT+0600 (Bangladesh Standard Time)", 'dd/MMMM/yyyy h:m:s tt').date
times.format(new Date(2011, 11, 18), 'dd/MMMM/yyyy h:m:s tt').date
```

Dependencies 
==========
None.

Community Contribution
==========
If you want to help and provide a patch for a bugfix or new feature, please take a few minutes and e-mail us (rakib424@gmail.com). In particular check out the Coding standards and Commit Message Style Guide.

In general, fork the project, create a branch for a specific change and send a pull request for that branch. Don't mix unrelated changes. You can use the commit message as the description for the pull request.


------
Contact: [rakib424@gmail.com](mailto:rakib424@gmail.com)
