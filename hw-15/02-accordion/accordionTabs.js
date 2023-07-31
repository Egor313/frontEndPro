class AccordionTabs {
    static DEFAULT_OPEN_INDEX = 0;
    static ACCORDION_ITEM_BTN_CLASS = 'accordion-item-btn';
    static ACCORDION_ITEM_CONTENT_CLASS = 'accordion-item-content';
    static ACTIVE_CLASS = 'active';


    constructor(rootEl, defaultOpenIndex = AccordionTabs.DEFAULT_OPEN_INDEX) {
      this.rootEl = rootEl;

      this.navItems = Array.from(this.rootEl.querySelector('nav').children);
      this.contentItems = Array.from(this.rootEl.querySelector('div').children);
  
      this.bindStyles();
      this.bindEvents();
      this.openContentByIndex(defaultOpenIndex);
    }

    
    bindStyles() {
        this.navItems.forEach((btn) => {
            btn.classList.add(AccordionTabs.ACCORDION_ITEM_BTN_CLASS);
        });

        this.contentItems.forEach((contentItem) => {
            contentItem.classList.add(AccordionTabs.ACCORDION_ITEM_CONTENT_CLASS)
        })
    }
  
    bindEvents() {
      this.rootEl.addEventListener('click', this.onTabClick.bind(this));
    }
  
    onTabClick(e) {
      const target = e.target;
      const isbtnClass = target.classList.contains(AccordionTabs.ACCORDION_ITEM_BTN_CLASS);
  
      if (isbtnClass) {
        const index = this.navItems.indexOf(target);
        this.openContentByIndex(index);
      }
    }

    openContentByIndex(index) {
        this.contentItems.forEach((contentItem, i) => {
          contentItem.classList.toggle(AccordionTabs.ACTIVE_CLASS, i === index);
        });
      }
  }
