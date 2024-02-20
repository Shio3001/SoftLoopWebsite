const changePop = () => {
  var ua = window.navigator.userAgent.toLowerCase();

  if (ua.indexOf("windows nt") !== -1) {
    runPop();
  }
};

const runPop = () => {
  const texth1 = document.querySelectorAll("h1");
  const texth2 = document.querySelectorAll("h2");
  const texth3 = document.querySelectorAll("h3");
  const textp = document.querySelectorAll("p");
  const happy = document.querySelector(".happy");
  const project_sub_name_doc = document.getElementById("project_sub_name");
  project_sub_name_doc.textContent = "プロジェクトページ 創英角ポップ体モード(隠し機能です。発見おめでとうございます！)";
  texth1.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
    block.style.paddingTop = "10px";
  });
  texth2.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
  });
  texth3.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
  });
  textp.forEach((block) => {
    block.style.fontFamily = "HGS創英角ﾎﾟｯﾌﾟ体";
    block.style.backgroundColor = "#00ff00";
  });

  happy.style.cursor = "help";
  happy.style.width = "100vw";
};
