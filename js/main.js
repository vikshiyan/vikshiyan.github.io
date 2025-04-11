document.addEventListener("DOMContentLoaded", () => {
  // First slider - first-block__slider
  fetch("./elements.json")
    .then((response) => response.json())
    .then((data) => {
      const firstBlockSlides = data.filter((item) =>
        ["nft-001", "nft-011"].includes(item.id)
      );

      const firstBlockWrapper = document.querySelector(
        "#first-block-slider .swiper-wrapper"
      );

      if (!firstBlockWrapper) {
        console.error("First block slider wrapper not found!");
        return;
      }

      firstBlockSlides.forEach((item) => {
        const firstBlockSlide = document.createElement("div");
        firstBlockSlide.className = "swiper-slide";

        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.title;
        imgElement.className = "first-block__img1";

        firstBlockSlide.appendChild(imgElement);
        firstBlockWrapper.appendChild(firstBlockSlide);
      });

      const firstBlockSwiper = new Swiper("#first-block-slider", {
        slidesPerView: window.innerWidth <= 767 ? 1 : 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      });

      window.firstBlockSwiper = firstBlockSwiper;
    })
    .catch((error) =>
      console.error("Error loading first block slider:", error)
    );

  //Second slider second-block__content
  fetch("./elements.json")
    .then((response) => response.json())
    .then((data) => {
      const section2Images = data.filter((item) =>
        [
          "./images/photos/image2.webp",
          "./images/photos/image3.webp",
          "./images/photos/image4.webp",
        ].includes(item.image)
      );

      const swiperWrapper = document.querySelector(
        "#second-block-content .swiper-wrapper"
      );

      if (!swiperWrapper) {
        console.error("Swiper wrapper not found!");
        return;
      }

      section2Images.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const imgContainer = document.createElement("div");
        imgContainer.className = "second-block__img-container";

        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.title;
        imgElement.className = "second-block__content-img";

        const textBlock = document.createElement("div");
        textBlock.className = "second-block__text";

        const titleElement = document.createElement("p");
        titleElement.className = "second-block__text-title";
        titleElement.textContent = item.title;

        const priceElement = document.createElement("p");
        priceElement.className = "second-block__price";
        priceElement.textContent = item.price;

        imgContainer.appendChild(imgElement);
        textBlock.appendChild(titleElement);
        textBlock.appendChild(priceElement);

        slide.appendChild(imgContainer);
        slide.appendChild(textBlock);

        swiperWrapper.appendChild(slide);
      });

      const swiper = new Swiper("#second-block-content", {
        slidesPerView: window.innerWidth <= 767 ? 1 : 2,
        spaceBetween: window.innerWidth <= 767 ? 10 : 24,
        loop: true,
        navigation: false,
      });

      window.swiper = swiper;

      document
        .querySelector(".second-block__arrow-prev")
        .addEventListener("click", () => {
          swiper.slidePrev();
        });

      document
        .querySelector(".second-block__arrow-next")
        .addEventListener("click", () => {
          swiper.slideNext();
        });

      const mobileNext = document.querySelector(
        ".second-block__icons-mobile .second-block__arrow-next"
      );
      if (mobileNext) {
        mobileNext.addEventListener("click", () => {
          swiper.slideNext();
        });
      }

      const mobilePrev = document.querySelector(
        ".second-block__icons-mobile .second-block__arrow-prev"
      );
      if (mobilePrev) {
        mobilePrev.addEventListener("click", () => {
          swiper.slidePrev();
        });
      }

      // Third slider Second block footer slider
      const secondBlockFooterSlides = data.filter((item) =>
        ["nft-005", "nft-010"].includes(item.id)
      );

      const secondBlockFooterWrapper = document.querySelector(
        "#second-block-footer-slider .swiper-wrapper"
      );

      if (!secondBlockFooterWrapper) {
        console.error("Second block footer slider wrapper not found!");
        return;
      }

      secondBlockFooterSlides.forEach((item) => {
        const secondBlockFooterSlide = document.createElement("div");
        secondBlockFooterSlide.className = "swiper-slide";

        secondBlockFooterSlide.innerHTML = `
          <img
            src="${item.image}"
            alt="${item.title}"
            class="second-block__footer-img"
          />
          <div class="second-block__info">
            <div class="second-block__deal">
              <p class="second-block__deal-title">DAILY DEALS</p>
              <p class="second-block__deal-text">Time left until end</p>
              <div class="second-block__timer">
                <p class="second-block__timer-item">
                  14 <span class="second-block__timer-label">Hour</span>
                </p>
                <p class="second-block__timer-item">
                  14 <span class="second-block__timer-label">Minutes</span>
                </p>
                <p class="second-block__timer-item">
                  14 <span class="second-block__timer-label">Second</span>
                </p>
              </div>
            </div>
            <div class="second-block__price-block">
              <p class="second-block__price-title">${item.title}</p>
              <p class="second-block__price-value">
                ${
                  item.price.split(" ")[0]
                }<span class="second-block__price-currency">ETH</span>
              </p>
            </div>
          </div>
        `;

        secondBlockFooterWrapper.appendChild(secondBlockFooterSlide);
      });

      const secondBlockFooterSwiper = new Swiper(
        "#second-block-footer-slider",
        {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        }
      );

      // Fourth slider - Third block slider (Top Artist)
      const thirdBlockSlides = data.filter((item) =>
        ["nft-006", "nft-007", "nft-008", "nft-011"].includes(item.id)
      );

      const thirdBlockWrapper = document.querySelector(
        "#third-block-slider .swiper-wrapper"
      );

      if (!thirdBlockWrapper) {
        console.error("Third block slider wrapper not found!");
        return;
      }

      thirdBlockSlides.forEach((item) => {
        const thirdBlockSlide = document.createElement("div");
        thirdBlockSlide.className = "swiper-slide";

        thirdBlockSlide.innerHTML = `
          <img
            src="${item.image}"
            alt="${item.title}"
            class="third-block__main-image"
          />
          
          <div class="third-block__author">
            <img
              src="${item.avatar}.webp"
              alt="avatar ${item.author}"
              class="third-block__author-avatar"
            />
          
            <div class="third-block__author-info">
              <p class="third-block__author-name">${item.author}</p>
              <p class="third-block__author-items">${item.items} items</p>
            </div>
          </div>
        `;

        thirdBlockWrapper.appendChild(thirdBlockSlide);
      });

      const thirdBlockSwiper = new Swiper("#third-block-slider", {
        slidesPerView: window.innerWidth <= 767 ? 1 : 3,
        spaceBetween: window.innerWidth <= 767 ? 10 : 24,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });

      window.thirdBlockSwiper = thirdBlockSwiper;

      initTimers();
    })
    .catch((error) => console.error("Error loading JSON:", error));
});

// Timer function
function initTimers() {
  const timers = document.querySelectorAll(".second-block__timer");

  timers.forEach((timer) => {
    let seconds = Math.floor(Math.random() * 86400) + 3600;

    function updateTimer() {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      timer.innerHTML = `
        <p class="second-block__timer-item">
          ${String(hours).padStart(
            2,
            "0"
          )} <span class="second-block__timer-label">Hour</span>
        </p>
        <p class="second-block__timer-item">
          ${String(minutes).padStart(
            2,
            "0"
          )} <span class="second-block__timer-label">Minutes</span>
        </p>
        <p class="second-block__timer-item">
          ${String(secs).padStart(
            2,
            "0"
          )} <span class="second-block__timer-label">Second</span>
        </p>
      `;

      if (seconds > 0) {
        seconds--;
      }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  });
}

// Range slider
document.addEventListener("DOMContentLoaded", function () {
  const priceRange = document.getElementById("price");

  function updateRangeProgress() {
    const value = priceRange.value;
    const min = priceRange.min || 0;
    const max = priceRange.max || 10;
    const percentage = ((value - min) / (max - min)) * 100;

    priceRange.style.backgroundPosition = 100 - percentage + "% 0";
  }

  updateRangeProgress();

  priceRange.addEventListener("input", updateRangeProgress);
});

const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    this.value = this.value.replace(/\D/g, "");

    if (this.value.length > 15) {
      this.value = this.value.slice(0, 15);
    }
  });
}

function showModalForm() {
  const modal = document.getElementById("nft-modal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function validatePhone(phoneInput) {
  const phoneValue = phoneInput.value.trim();
  const phoneError = document.getElementById("phone-error");

  if (phoneValue === "") {
    phoneInput.classList.add("invalid");
    phoneError.textContent = "This field is required";
    return false;
  }

  if (!/^\d+$/.test(phoneValue)) {
    phoneInput.classList.add("invalid");
    phoneError.textContent = "Phone number should contain digits only";
    return false;
  }

  if (phoneValue.length < 10 || phoneValue.length > 15) {
    phoneInput.classList.add("invalid");
    phoneError.textContent = "Phone number should be 10-15 digits";
    return false;
  }

  phoneInput.classList.remove("invalid");
  phoneError.textContent = "";
  return true;
}

// Filter fourth-block
document.addEventListener("DOMContentLoaded", () => {
  let allNfts = [];
  let filteredNfts = [];

  async function loadNftData() {
    try {
      const response = await fetch("./elements.json");
      if (!response.ok) {
        throw new Error("Помилка завантаження даних");
      }

      const data = await response.json();
      allNfts = data;

      const nftOrderedIds = ["nft-009", "nft-010", "nft-001", "nft-011"];

      const initialNfts = [];
      nftOrderedIds.forEach((id) => {
        const nft = data.find((item) => item.id === id);
        if (nft) initialNfts.push(nft);
      });

      filteredNfts = [...allNfts];

      const firstColumnCards = [initialNfts[0], initialNfts[1]]; // image9, image10
      const secondColumnCards = [initialNfts[2], initialNfts[3]]; // image1, image11

      renderColumnCards(firstColumnCards, 0);
      renderColumnCards(secondColumnCards, 1);

      setupEventListeners();

      return data;
    } catch (error) {
      console.error("Помилка завантаження JSON:", error);
      return [];
    }
  }

  // NFT filtering function
  function filterNfts() {
    console.log("Початок фільтрації...");

    const priceValue = parseFloat(document.getElementById("price").value);
    console.log("Фільтр за ціною:", priceValue);

    const statusButtons = document.querySelectorAll(
      ".fourth-block__status-button"
    );
    let activeStatus = null;

    statusButtons.forEach((button) => {
      if (button.classList.contains("active")) {
        activeStatus = button.textContent.trim();
      }
    });
    console.log("Фільтр за статусом:", activeStatus || "не вибрано");

    const tagValue = document.getElementById("tag").value.toLowerCase().trim();
    const categoryValue = document
      .getElementById("category")
      .value.toLowerCase()
      .trim();

    console.log("Фільтр за тегом:", tagValue || "не вказано");
    console.log("Фільтр за категорією:", categoryValue || "не вказано");

    let result = allNfts.filter((nft) => {
      const nftPrice = parseFloat(nft.price.split(" ")[0]);
      if (nftPrice > priceValue) return false;

      if (activeStatus && nft.status !== activeStatus) return false;

      if (
        tagValue &&
        !nft.tags.some((tag) => tag.toLowerCase().includes(tagValue))
      )
        return false;

      if (categoryValue && !nft.category.toLowerCase().includes(categoryValue))
        return false;

      return true;
    });

    console.log("Знайдено NFT після фільтрації:", result.length);
    filteredNfts = result;

    return result;
  }

  // Fixed card rendering function
  function renderStaticCards(nfts) {
    if (!nfts || nfts.length === 0) return;

    const firstColumnCards = nfts.slice(0, 2); // image9, image10
    const secondColumnCards = nfts.slice(2, 4); // image1, image11

    renderColumnCards(firstColumnCards, 0);
    renderColumnCards(secondColumnCards, 1);
  }

  // Render all filtered cards
  function renderFilteredCards() {
    const cardsContainer = document.getElementById("nft-cards");

    const columns = cardsContainer.querySelectorAll(
      ".fourth-block__card-column"
    );
    if (columns.length < 2) {
      cardsContainer.innerHTML = "";

      const column1 = document.createElement("div");
      column1.className = "fourth-block__card-column";

      const column2 = document.createElement("div");
      column2.className = "fourth-block__card-column";

      cardsContainer.appendChild(column1);
      cardsContainer.appendChild(column2);
    } else {
      columns[0].innerHTML = "";
      columns[1].innerHTML = "";
    }

    if (filteredNfts.length === 0) {
      cardsContainer.innerHTML = "";
      const noResultsElement = document.createElement("p");
      noResultsElement.textContent = "Nothing found. Try changing the filters.";
      noResultsElement.className = "fourth-block__no-results";
      cardsContainer.appendChild(noResultsElement);
      return;
    }

    const limitedNfts = filteredNfts.slice(0, 4);

    let col1Cards = [];
    let col2Cards = [];

    limitedNfts.forEach((nft, index) => {
      if (index % 2 === 0) {
        col1Cards.push(nft);
      } else {
        col2Cards.push(nft);
      }
    });

    const updatedColumns = cardsContainer.querySelectorAll(
      ".fourth-block__card-column"
    );

    renderCardImages(col1Cards, updatedColumns[0]);
    renderCardImages(col2Cards, updatedColumns[1]);
  }

  // Auxiliary function for rendering cards in a column
  function renderColumnCards(cards, columnIndex) {
    const columns = document.querySelectorAll(".fourth-block__card-column");
    if (!columns[columnIndex]) return;

    columns[columnIndex].innerHTML = "";

    cards.forEach((nft) => {
      const imgElement = document.createElement("img");
      imgElement.src = nft.image;
      imgElement.alt = nft.title;
      imgElement.className = "fourth-block__card-image";

      columns[columnIndex].insertAdjacentElement("beforeend", imgElement);
    });
  }

  // Auxiliary function for rendering cards
  function renderCardImages(cards, column) {
    if (!column) {
      console.error("Колонка не знайдена для рендерингу");
      return;
    }

    cards.forEach((nft) => {
      const imgElement = document.createElement("img");
      imgElement.src = nft.image;
      imgElement.alt = nft.title;
      imgElement.className = "fourth-block__card-image";

      column.insertAdjacentElement("beforeend", imgElement);
    });
  }

  // Input validation function
  function validateInput(inputElement) {
    if (inputElement.value.trim().length < 2) {
      inputElement.classList.add("invalid");
      console.log("Поле не може бути пустим або менше 2 символів");
      return false;
    }

    inputElement.classList.remove("invalid");
    return true;
  }

  // Update price value
  function updatePriceValue() {
    const priceValue = document.getElementById("price").value;
    document.querySelectorAll(".fourth-block__range-value")[1].textContent =
      parseFloat(priceValue).toFixed(3) + " ETH";
  }

  function setupEventListeners() {
    document
      .querySelectorAll(".fourth-block__status-button")
      .forEach((button) => {
        button.addEventListener("click", function () {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
          } else {
            document
              .querySelectorAll(".fourth-block__status-button")
              .forEach((btn) => {
                btn.classList.remove("active");
              });

            this.classList.add("active");
          }
        });
      });

    // Apply button
    document
      .querySelector(".fourth-block__apply-button")
      .addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Натиснуто кнопку Apply");

        let isValid = true;

        const tagInput = document.getElementById("tag");
        const categoryInput = document.getElementById("category");

        if (tagInput.value.trim() === "") {
          tagInput.classList.add("invalid");
          console.log("Поле Tag є обов'язковим");
          isValid = false;
        } else if (!validateInput(tagInput)) {
          isValid = false;
        }

        if (categoryInput.value.trim() === "") {
          categoryInput.classList.add("invalid");
          console.log("Поле Category є обов'язковим");
          isValid = false;
        } else if (!validateInput(categoryInput)) {
          isValid = false;
        }

        if (isValid) {
          filterNfts();
          renderFilteredCards();
        }
      });

    // Update price
    document
      .getElementById("price")
      .addEventListener("input", updatePriceValue);

    // Validating and sending a form in a modal window
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let formValid = true;
        const formInputs = this.querySelectorAll(".modal__input");
        const formData = {};

        formInputs.forEach((input) => {
          const errorElement = document.getElementById(`${input.id}-error`);
          formData[input.id] = input.value.trim();

          if (input.id === "phone") {
            if (!validatePhone(input)) {
              formValid = false;
            }
          } else if (input.value.trim() === "") {
            input.classList.add("invalid");
            if (errorElement) {
              errorElement.textContent = "This field is required";
            }
            formValid = false;
          } else {
            input.classList.remove("invalid");
            if (errorElement) {
              errorElement.textContent = "";
            }
          }
        });

        if (formValid) {
          const modalContent = document.querySelector(".modal__content");
          const formContent = document.querySelector(".modal__form");

          const sendingStateContainer = document.createElement("div");
          sendingStateContainer.className = "sending-state-container";
          sendingStateContainer.style.textAlign = "center";
          sendingStateContainer.style.padding = "40px 0";

          const loader = document.createElement("div");
          loader.className = "telegram-loader";
          loader.innerHTML = `
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#005aaa" stroke-width="5" stroke-dasharray="31.4 31.4">
                <animateTransform 
                  attributeName="transform" 
                  attributeType="XML" 
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="1s"
                  repeatCount="indefinite" />
              </circle>
            </svg>
            <p style="margin-top: 20px; font-size: 18px; color: #fff;">Sending your message...</p>
          `;

          sendingStateContainer.appendChild(loader);

          gsap.to(formContent, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: function () {
              formContent.style.display = "none";
              modalContent.appendChild(sendingStateContainer);

              gsap.from(sendingStateContainer, {
                opacity: 0,
                y: -20,
                duration: 0.3,
              });

              // Sending data to Telegram
              sendDataToTelegram(formData)
                .then((result) => {
                  if (result.ok) {
                    // success
                    sendingStateContainer.innerHTML = `
                      <div class="success-icon" style="color: #4CAF50; font-size: 50px; margin-bottom: 20px;">
                        <svg width="80" height="80" viewBox="0 0 80 80">
                          <circle cx="40" cy="40" r="35" fill="none" stroke="#4CAF50" stroke-width="5"/>
                          <path d="M25 40 L38 55 L60 30" fill="none" stroke="#4CAF50" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
                            <animate 
                              attributeName="stroke-dasharray" 
                              from="0 100" 
                              to="100 100" 
                              dur="0.8s"
                              fill="freeze" />
                          </path>
                        </svg>
                      </div>
                      <p style="font-size: 24px; color: #4CAF50; margin-bottom: 10px;">Success!</p>
                      <p style="font-size: 16px; color: #fff;">Your message has been sent</p>
                    `;

                    gsap.from(
                      sendingStateContainer.querySelector(".success-icon"),
                      {
                        scale: 0.5,
                        opacity: 0,
                        duration: 0.5,
                        ease: "back.out(1.7)",
                      }
                    );
                  } else {
                    // error
                    throw new Error("Помилка відправки повідомлення");
                  }
                })
                .catch((error) => {
                  console.error("Помилка відправки в Telegram:", error);

                  sendingStateContainer.innerHTML = `
                    <div class="error-icon" style="color: #F44336; font-size: 50px; margin-bottom: 20px;">
                      <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="35" fill="none" stroke="#F44336" stroke-width="5"/>
                        <line x1="28" y1="28" x2="52" y2="52" stroke="#F44336" stroke-width="5" stroke-linecap="round">
                          <animate 
                            attributeName="stroke-dasharray" 
                            from="0 100" 
                            to="100 100" 
                            dur="0.8s"
                            fill="freeze" />
                        </line>
                        <line x1="52" y1="28" x2="28" y2="52" stroke="#F44336" stroke-width="5" stroke-linecap="round">
                          <animate 
                            attributeName="stroke-dasharray" 
                            from="0 100" 
                            to="100 100" 
                            dur="0.8s"
                            fill="freeze" />
                        </line>
                      </svg>
                    </div>
                    <p style="font-size: 24px; color: #F44336; margin-bottom: 10px;">Error!</p>
                    <p style="font-size: 16px; color: #fff;">Failed to send message. Please try again later.</p>
                    <p style="font-size: 14px; color: #aaa; margin-top: 10px;">${error.message}</p>
                  `;

                  gsap.from(
                    sendingStateContainer.querySelector(".error-icon"),
                    {
                      scale: 0.5,
                      opacity: 0,
                      duration: 0.5,
                      ease: "back.out(1.7)",
                    }
                  );
                })
                .finally(() => {
                  setTimeout(() => {
                    gsap.to(modalContent, {
                      opacity: 0,
                      y: 20,
                      scale: 0.9,
                      duration: 0.3,
                      onComplete: function () {
                        const modal = document.getElementById("nft-modal");
                        modal.style.display = "none";
                        document.body.style.overflow = "auto";

                        sendingStateContainer.remove();
                        formContent.style.display = "block";
                        gsap.to(formContent, {
                          opacity: 1,
                          y: 0,
                          duration: 0,
                        });
                        contactForm.reset();
                      },
                    });

                    gsap.to(document.getElementById("nft-modal"), {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      duration: 0.3,
                    });
                  }, 3000);
                });
            },
          });
        }
      });
    }

    function showFormNotification(message, type) {
      const existingNotification = document.querySelector(".form-notification");
      if (existingNotification) {
        existingNotification.remove();
      }

      const notification = document.createElement("div");
      notification.className = `form-notification form-notification--${type}`;
      notification.textContent = message;

      notification.style.padding = "10px 15px";
      notification.style.borderRadius = "4px";
      notification.style.marginTop = "15px";
      notification.style.fontWeight = "500";
      notification.style.textAlign = "center";

      if (type === "success") {
        notification.style.backgroundColor = "rgba(76, 175, 80, 0.2)";
        notification.style.color = "#4CAF50";
        notification.style.border = "1px solid #4CAF50";
      } else {
        notification.style.backgroundColor = "rgba(244, 67, 54, 0.2)";
        notification.style.color = "#F44336";
        notification.style.border = "1px solid #F44336";
      }

      const submitWrapper = document.querySelector(".modal__button-wrapper");
      submitWrapper.insertAdjacentElement("afterend", notification);

      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  }

  const searchInput = document.querySelector(".input__wrapper .input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchQuery = this.value.trim().toLowerCase();

      const searchResults = allNfts.filter((nft) =>
        nft.title.toLowerCase().includes(searchQuery)
      );

      if (searchQuery === "") {
        filteredNfts = [...allNfts];
      } else {
        filteredNfts = searchResults;
        console.log(
          `Знайдено ${searchResults.length} результатів для "${searchQuery}"`
        );
      }

      renderFilteredCards();
    });

    // Search button
    const searchButton = document.querySelector(".input-buton");
    if (searchButton) {
      searchButton.addEventListener("click", function () {
        const searchQuery = searchInput.value.trim().toLowerCase();

        const searchResults = allNfts.filter((nft) =>
          nft.title.toLowerCase().includes(searchQuery)
        );

        if (searchQuery === "") {
          filteredNfts = [...allNfts];
        } else {
          filteredNfts = searchResults;
          console.log(
            `Знайдено ${searchResults.length} результатів для "${searchQuery}"`
          );
        }

        renderFilteredCards();
      });
    }
  }
  loadNftData();
});

// Function for sending data to Telegram
function sendDataToTelegram(formData) {
  const botToken = "7603758318:AAE9t1VIya89ZBMAyqlM-wtIJZ8t5B8wN-4";
  const chatId = "7163885173";
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const message = `
🔔 <b>Нова заявка з NFT сайту</b> 🔔

👤 <b>Ім'я:</b> ${formData.name}
👤 <b>Прізвище:</b> ${formData.lastName}
📧 <b>Email:</b> ${formData.mail}
📱 <b>Телефон:</b> ${formData.phone}
💬 <b>Повідомлення:</b> ${formData.message || "Не вказано"}

📅 Дата: ${new Date().toLocaleString()}
`;

  const params = {
    chat_id: chatId,
    text: message,
    parse_mode: "HTML",
  };

  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((response) => response.json());
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".header__nav");

  const mobileToggle = document.createElement("button");
  mobileToggle.className = "header__mobile-toggle";
  mobileToggle.innerHTML =
    '<img src="./images/header/menu.svg" alt="Menu" class="header__mobile-icon" />';

  if (window.innerWidth <= 767) {
    header.insertBefore(mobileToggle, nav);
  }

  if (window.innerWidth <= 767) {
    if (window.firstBlockSwiper) {
      window.firstBlockSwiper.params.slidesPerView = 1;
      window.firstBlockSwiper.update();
    }

    if (window.swiper) {
      window.swiper.params.slidesPerView = 1;
      window.swiper.update();
    }

    if (window.thirdBlockSwiper) {
      window.thirdBlockSwiper.params.slidesPerView = 1;
      window.thirdBlockSwiper.update();
    }
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 767) {
      if (!document.querySelector(".header__mobile-toggle")) {
        header.insertBefore(mobileToggle, nav);
      }

      if (window.thirdBlockSwiper) {
        window.thirdBlockSwiper.params.slidesPerView = 1;
        window.thirdBlockSwiper.update();
      }

      if (window.swiper) {
        window.swiper.params.slidesPerView = 1;
        window.swiper.update();
      }
    } else {
      if (document.querySelector(".header__mobile-toggle")) {
        document.querySelector(".header__mobile-toggle").remove();
      }
      nav.classList.remove("active");

      if (window.thirdBlockSwiper) {
        window.thirdBlockSwiper.params.slidesPerView = 3;
        window.thirdBlockSwiper.update();
      }

      if (window.swiper) {
        window.swiper.params.slidesPerView = 2;
        window.swiper.update();
      }
    }
  });

  // Handler for all buttons that open a modal window
  document.querySelectorAll(".modal-trigger").forEach((button) => {
    button.addEventListener("click", function () {
      showModalForm();
    });
  });

  // Close modal
  const closeBtn = document.querySelector(".modal__close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const modal = document.getElementById("nft-modal");
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  const modal = document.getElementById("nft-modal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  window.showModalForm = function () {
    const modal = document.getElementById("nft-modal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";

      const modalContent = modal.querySelector(".modal__content");

      gsap.fromTo(
        modal,
        { backgroundColor: "rgba(0, 0, 0, 0)" },
        { backgroundColor: "rgba(0, 0, 0, 0.8)", duration: 0.4 }
      );

      gsap.fromTo(
        modalContent,
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  };

  const closeBtn = document.querySelector(".modal__close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const modal = document.getElementById("nft-modal");
      const modalContent = modal.querySelector(".modal__content");

      gsap.to(modalContent, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.3,
        onComplete: function () {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        },
      });

      gsap.to(modal, {
        backgroundColor: "rgba(0, 0, 0, 0)",
        duration: 0.3,
      });
    });
  }

  const modal = document.getElementById("nft-modal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        const modalContent = modal.querySelector(".modal__content");

        gsap.to(modalContent, {
          opacity: 0,
          y: 20,
          scale: 0.9,
          duration: 0.3,
          onComplete: function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
          },
        });

        gsap.to(modal, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          duration: 0.3,
        });
      }
    });
  }

  const mobileToggle = document.querySelector(".header__mobile-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      const nav = document.querySelector(".header__nav");
      const navItems = nav.querySelectorAll(".header__nav-item");
      const img = this.querySelector("img");

      gsap.killTweensOf(nav);
      gsap.killTweensOf(navItems);
      gsap.killTweensOf(img);

      const willBeActive = !this.classList.contains("active");

      if (willBeActive) {
        nav.style.cssText =
          "display: block; height: auto; opacity: 0; position: absolute; visibility: hidden; pointer-events: none;";
        nav.classList.add("active");

        const navHeight = nav.offsetHeight;

        nav.style.cssText = "";
        gsap.set(nav, {
          display: "block",
          height: 0,
          opacity: 0,
          overflow: "hidden",
          visibility: "visible",
        });

        this.classList.add("active");

        gsap.to(img, {
          rotation: 180,
          opacity: 0.5,
          duration: 0.6,
          ease: "power1.inOut",
          onComplete: function () {
            img.src = "./images/header/close.svg";
            img.alt = "Close menu";
            gsap.fromTo(
              img,
              { rotation: 180, opacity: 0.5 },
              { rotation: 360, opacity: 1, duration: 0.6, ease: "power1.out" }
            );
          },
        });

        const tl = gsap.timeline();

        tl.to(nav, {
          height: navHeight,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          onComplete: function () {
            nav.style.height = "auto";
            nav.style.overflow = "visible";
          },
        });

        tl.fromTo(
          navItems,
          { opacity: 0, y: -10, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power1.out",
          },
          "-=0.5"
        );
      } else {
        // close menu
        this.classList.remove("active");

        const currentHeight = nav.offsetHeight;
        gsap.set(nav, {
          height: currentHeight,
          overflow: "hidden",
        });

        gsap.to(navItems, {
          opacity: 0,
          y: -10,
          scale: 0.95,
          stagger: 0.08,
          duration: 0.5,
          ease: "power1.in",
        });

        gsap.to(img, {
          rotation: 180,
          opacity: 0.5,
          duration: 0.6,
          ease: "power1.inOut",
          onComplete: function () {
            img.src = "./images/header/menu.svg";
            img.alt = "Menu";
            gsap.fromTo(
              img,
              { rotation: 180, opacity: 0.5 },
              { rotation: 0, opacity: 1, duration: 0.6, ease: "power1.out" }
            );
          },
        });

        gsap.to(nav, {
          height: 0,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.inOut",
          onComplete: function () {
            nav.classList.remove("active");
            gsap.set(nav, { display: "none" });
          },
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function rebindModalTriggers() {
    document.querySelectorAll(".modal-trigger").forEach((button) => {
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);

      newButton.addEventListener("click", function (e) {
        e.stopPropagation();
        showModalForm();
      });
    });
  }

  rebindModalTriggers();

  const mobileToggle = document.querySelector(".header__mobile-toggle");
  if (mobileToggle) {
    const originalHandler = mobileToggle.onclick;
    mobileToggle.onclick = function (event) {
      if (originalHandler) originalHandler.call(this, event);

      if (!this.classList.contains("active")) {
        setTimeout(function () {
          const nav = document.querySelector(".header__nav");
          nav.style.pointerEvents = "none";

          setTimeout(function () {
            nav.style.pointerEvents = "auto";
            rebindModalTriggers();
          }, 100);
        }, 800);
      }
    };
  }

  document.querySelectorAll(".header__button").forEach((button) => {
    button.style.position = "relative";
    button.style.zIndex = "15";

    button.addEventListener("click", function (e) {
      e.stopPropagation();
      showModalForm();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const footerForm = document.querySelector(".footer__input-wrapper");
  const footerInput = document.querySelector(".footer__input");
  const footerButton = document.querySelector(".footer__input-button");

  if (footerButton && footerInput) {
    footerButton.addEventListener("click", function () {
      submitFooterEmail();
    });

    footerInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        submitFooterEmail();
      }
    });
  }

  function submitFooterEmail() {
    const email = footerInput.value.trim();

    if (!validateEmail(email)) {
      showFooterMessage("Please enter a valid email address", "error");
      return;
    }

    console.log("Newsletter subscription email:", email);

    showFooterMessage("Thank you for subscribing!", "success");

    footerInput.value = "";
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showFooterMessage(message, type) {
    const existingMessage = document.querySelector(".footer__message");
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageElement = document.createElement("div");
    messageElement.className = `footer__message footer__message--${type}`;
    messageElement.textContent = message;

    if (type === "error") {
      messageElement.style.color = "#ff4040";
    } else {
      messageElement.style.color = "#5dff7e";
    }

    footerForm.insertAdjacentElement("afterend", messageElement);

    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }
});

document.head.appendChild(style);
