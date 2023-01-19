var Flight-Experience, Medical-Conditions, Criminal-History, Time, Become-pilot, Get-Started, Zip-Code, Name, Email, email, phone;


var we_tabs_next_button = '[bloc=next-question]';
    var we_tabs_prev_button = '[bloc=prev-question]';
    var we_tabs_active_class = 'active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['Flight-Experience'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }$("[name=Flight-Experience]").on("input", function () {
    Flight-Experience = getValueFromInput("Flight-Experience");

      nextTab = 'Medical-Conditions';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Medical-Conditions]')).attr('prev-tab',we_activeTab);

      });

    $("[name=Flight-Experience]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Flight-Experience = getValueFromInput("Flight-Experience");

      nextTab = 'Medical-Conditions';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Medical-Conditions]')).attr('prev-tab',we_activeTab);

      });
    $("[name=Medical-Conditions]").on("input", function () {
    Medical-Conditions = getValueFromInput("Medical-Conditions");

      nextTab = 'Criminal-History';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Criminal-History]')).attr('prev-tab',we_activeTab);

      });

    $("[name=Medical-Conditions]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Medical-Conditions = getValueFromInput("Medical-Conditions");

      nextTab = 'Criminal-History';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Criminal-History]')).attr('prev-tab',we_activeTab);

      });
    $("[name=Criminal-History]").on("input", function () {
    Criminal-History = getValueFromInput("Criminal-History");

      nextTab = 'Time';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Time]')).attr('prev-tab',we_activeTab);

      });

    $("[name=Criminal-History]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Criminal-History = getValueFromInput("Criminal-History");

      nextTab = 'Time';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Time]')).attr('prev-tab',we_activeTab);

      });
    $("[name=Time]").on("input", function () {
    Time = getValueFromInput("Time");

      nextTab = 'Become-pilot';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Become-pilot]')).attr('prev-tab',we_activeTab);

      });

    $("[name=Time]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Time = getValueFromInput("Time");

      nextTab = 'Become-pilot';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Become-pilot]')).attr('prev-tab',we_activeTab);

      });
    $("[name=Become-pilot]").on("input", function () {
    Become-pilot = getValueFromInput("Become-pilot");

      nextTab = 'Get-Started';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Get-Started]')).attr('prev-tab',we_activeTab);

      });

    $("[name=Become-pilot]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Become-pilot = getValueFromInput("Become-pilot");

      nextTab = 'Get-Started';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Get-Started]')).attr('prev-tab',we_activeTab);

      });
    $("[name=Get-Started]").on("input", function () {
    Get-Started = getValueFromInput("Get-Started");

      nextTab = 'Zip-Code';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Zip-Code]')).attr('prev-tab',we_activeTab);

      });

    $("[name=Get-Started]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Get-Started = getValueFromInput("Get-Started");

      nextTab = 'Zip-Code';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Zip-Code]')).attr('prev-tab',we_activeTab);

      });
    $("[name=Zip-Code]").on("input", function () {
    Zip-Code = getValueFromInput("Zip-Code");
      if (Zip-Code != null) {

        nextTab = 'Name';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=Name]')).attr('prev-tab',we_activeTab);

        }
});

    $("[name=Zip-Code]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Zip-Code = getValueFromInput("Zip-Code");
        if (Zip-Code != null) {

        nextTab = 'Name';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=Name]')).attr('prev-tab',we_activeTab);

        }
});
    $("[name=Name]").on("input", function () {
    Name = getValueFromInput("Name");
      if (Name != null) {

        nextTab = 'Email';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=Email]')).attr('prev-tab',we_activeTab);

        }
});

    $("[name=Name]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Name = getValueFromInput("Name");
        if (Name != null) {

        nextTab = 'Email';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=Email]')).attr('prev-tab',we_activeTab);

        }
});
    $("[name=Email]").on("input", function () {
    Email = getValueFromInput("Email");
      if (email != (null && phone != null)) {
    window.location.replace('https://av8prepprod.webflow.io/success');
  }
});

    $("[name=Email]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      Email = getValueFromInput("Email");
        if (email != (null && phone != null)) {
    window.location.href='https://av8prepprod.webflow.io/success';
  }
});
