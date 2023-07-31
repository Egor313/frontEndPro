class AccordionHorizontal {
    static DEFAULT_OPEN_INDEX = 0;
    static NAV_CLASS = 'accordion-nav';
    static CONTENT_CLASS = 'accordion-content';
    static ACCORDION_ITEM_BTN_CLASS = 'accordion-item-btn';
    static ACCORDION_ITEM_CONTENT_CLASS = 'accordion-item-content';
    static OPEN_CLASS = 'open';
  
    constructor(rootEl, defaultOpenIndex = AccordionHorizontal.DEFAULT_OPEN_INDEX) {
      this.rootEl = rootEl;

      this.navItems = Array.from(this.rootEl.querySelector('nav').children);
      this.contentItems = Array.from(this.rootEl.querySelector('div').children);


      this.bindStyles();
      this.bindEvents();
      this.openContentByIndex(defaultOpenIndex);
    }
  
    bindStyles() {
      this.navItems.forEach((btn, index) => {
          btn.classList.add(AccordionHorizontal.ACCORDION_ITEM_BTN_CLASS);
          btn.setAttribute('data-index', index);
        });

      this.contentItems.forEach((contentItem, index) => {
        contentItem.classList.add(AccordionHorizontal.ACCORDION_ITEM_CONTENT_CLASS);
        contentItem.setAttribute('data-index', index);
        });
    }
  
    bindEvents() {
      this.rootEl.querySelectorAll('.' + AccordionHorizontal.ACCORDION_ITEM_BTN_CLASS).forEach((btn) => {
        btn.addEventListener('click', this.onBtnClick.bind(this));
      });
    }
  
    onBtnClick(e) {
      const target = e.target;
      const index = target.getAttribute('data-index');
      const contentItems = this.rootEl.querySelectorAll('.' + AccordionHorizontal.ACCORDION_ITEM_CONTENT_CLASS);
  
      contentItems.forEach((contentItem, contentIndex) => {
        if (contentIndex === parseInt(index)) {
          contentItem.classList.toggle(AccordionHorizontal.OPEN_CLASS);
        } else {
          contentItem.classList.remove(AccordionHorizontal.OPEN_CLASS);
        }
      });
    }
  
    openContentByIndex(tabIndex) {
      const contentItem = this.rootEl.querySelector(`.${AccordionHorizontal.ACCORDION_ITEM_CONTENT_CLASS}[data-index="${tabIndex}"]`);
      if (contentItem) {
        contentItem.classList.add(AccordionHorizontal.OPEN_CLASS);
      }
    }
  }

