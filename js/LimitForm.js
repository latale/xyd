/**
 * Created by JSA on 2017/7/24.
 */
class LimitForm{
    constructor(target) {
        this.form = target;
        this.submit();
        this.goBack();
    }
    submit() {
        let self = this;
        $(this.form).submit(function() {
            new Validate() ? self.ajaxSubmit() : false;
            return false;
        })
    }
    ajaxSubmit() {

    }

    goBack() {
        $('.m-limit-title::before').click(function () {
            window.history.go(-1);
        })
    }
}


class Validate{
    constructor() {
        this.form = $('#form');
        this.validate();
    }
    validate() {
        this.validateBefore();
        return this.validating();
    }
    validateBefore() {
        let self = this;
        // console.log(1);
        self.form.find('.error-block').removeClass('active');
    }
    validating() {
        let self = this;
        let flag = true;
        self.form.find('input').each(function(index,item) {
            let condition = $(item).attr('validate');
            let val = $(item).val();
            if(!self.validateCondition(condition,val)) {
                console.log(condition,val);
                    self.outputError($(this),self.getErrorConditionText(condition));
                flag = false;
            }
        });
        return flag;
    }
    outputError(e,error) {
        $(e).closest('error-block').addClass('active');
        $(e).closest('error-block').find('p').text(error);
    }
    validateCondition(condition,val) {
        switch(condition) {
            case 'number':
                return (/^\d+$/.test(val));
            case 'required':
                return (val === '');
        }
    }
    getErrorConditionText(condition) {
        let cons = {'number':'数字格式不正确','required':'不得为空'};
        return cons[condition];
    }
}