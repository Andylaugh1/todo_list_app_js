use to_do_list_app;
db.dropDatabase();

db.to_do_list.insertMany([
  {
    task: "finish MVP",
    date: "2018-04-06",
    complete: "No"
  },
  {
    task: "finish linkdin",
    date: "2018-04-06",
    complete: "No"
  },
  {
    task: "finish cv",
    date: "2018-04-06",
    complete: "No"
  }
]);
