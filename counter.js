const timer = (startDate) => {
  let st_date_time = +new Date(startDate);
  let currentTime = +new Date();
  let diff = st_date_time - currentTime;
  let daysRemain = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hoursRemain = Math.floor(diff / 1000 / 60 / 60);
  let minsRemain = Math.floor(diff / 1000 / 60);
  let secRemain = Math.floor(diff / 1000);

  console.log(
    "Days " +
      daysRemain +
      "Hours " +
      hoursRemain +
      "Minutes " +
      minsRemain +
      "Seconds " +
      secRemain
  );
};

// mm/dd/yy
timer("11/05/2021 15:40");
