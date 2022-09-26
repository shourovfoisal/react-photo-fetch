import "./ScrollToTop.css";

const ScrollToTop = () => {
  const scrollButton = document.getElementById("scrollToTop");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollButton.setAttribute("style", "opacity: 1");
    } else {
      scrollButton.setAttribute("style", "opacity: 0");
    }
  }
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div id="scrollToTop" onClick={handleScroll}>
      <ion-icon name="chevron-up-outline"></ion-icon>
    </div>
  );
};

export default ScrollToTop;
