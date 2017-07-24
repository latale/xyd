/**
 * Created by JSA on 2017/7/24.
 */

// $(function() {
    class Show
{
        constructor(tabs,contents) {
            this.tabs = tabs;
            this.contents = contents;
            this.showContent();
        }

        showContent() {
            $(this.tabs).each((index,item) => {
                console.log(item);
                $(item).click( function() {
                       $(this).parent().toggleClass('active');
                    })
            })
        }
}
    // let showTabs = $('.m-condition-title');
    // let showContent = $('.m-condition-article');
    // function showTabContent(showTabs,showContent) {
    //     $(showTabs).each((index,item) => {
    //         let self = this;
    //         $(item).click(() => {
    //             $(self).parent().removeClass('active');
    //             $(showContent).index(index).parent().addClass('active');
    //         })
    //     })
    // }
    // showTabContent(showTabs,showContent);
// });