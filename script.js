const changePop = () => {
  const texth1 = document.querySelectorAll("h1");
  const texth2 = document.querySelectorAll("h2");
  const texth3 = document.querySelectorAll("h3");
  const textp = document.querySelectorAll("p");

  texth1.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
  });
  texth2.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
  });
  texth3.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
  });
  textp.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
  });
};
