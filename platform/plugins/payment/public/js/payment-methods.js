(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,o;return n=t,(o=[{key:"init",value:function(){$(".toggle-payment-item").off("click").on("click",(function(e){$(e.currentTarget).closest("tbody").find(".payment-content-item").toggleClass("hidden")})),$(".disable-payment-item").off("click").on("click",(function(e){e.preventDefault();var t=$(e.currentTarget);$("#confirm-disable-payment-method-modal").modal("show"),$("#confirm-disable-payment-method-button").on("click",(function(e){e.preventDefault(),$(e.currentTarget).addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:route("payments.methods.update.status"),data:{type:t.closest("form").find(".payment_type").val()},success:function(n){n.error?Botble.showError(n.message):(t.closest("tbody").find(".payment-name-label-group").addClass("hidden"),t.closest("tbody").find(".edit-payment-item-btn-trigger").addClass("hidden"),t.closest("tbody").find(".save-payment-item-btn-trigger").removeClass("hidden"),t.closest("tbody").find(".btn-text-trigger-update").addClass("hidden"),t.closest("tbody").find(".btn-text-trigger-save").removeClass("hidden"),t.addClass("hidden"),$(e.currentTarget).closest(".modal").modal("hide"),Botble.showSuccess(n.message)),$(e.currentTarget).removeClass("button-loading")},error:function(t){Botble.handleError(t),$(e.currentTarget).removeClass("button-loading")}})}))})),$(".save-payment-item").off("click").on("click",(function(e){e.preventDefault();var t=$(e.currentTarget);if(t.addClass("button-loading"),"undefined"!=typeof CKEDITOR&&CKEDITOR.instances)for(var n in CKEDITOR.instances)CKEDITOR.instances[n].updateElement();$.ajax({type:"POST",cache:!1,url:t.closest("form").prop("action"),data:t.closest("form").serialize(),success:function(e){e.error?Botble.showError(e.message):(t.closest("tbody").find(".payment-name-label-group").removeClass("hidden"),t.closest("tbody").find(".method-name-label").text(t.closest("form").find("input.input-name").val()),t.closest("tbody").find(".disable-payment-item").removeClass("hidden"),t.closest("tbody").find(".edit-payment-item-btn-trigger").removeClass("hidden"),t.closest("tbody").find(".save-payment-item-btn-trigger").addClass("hidden"),t.closest("tbody").find(".btn-text-trigger-update").removeClass("hidden"),t.closest("tbody").find(".btn-text-trigger-save").addClass("hidden"),Botble.showSuccess(e.message)),t.removeClass("button-loading")},error:function(e){Botble.handleError(e),t.removeClass("button-loading")}})})),$(".button-save-payment-settings").off("click").on("click",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:t.closest("form").prop("action"),data:t.closest("form").serialize(),success:function(e){e.error?Botble.showError(e.message):Botble.showSuccess(e.message),t.removeClass("button-loading")},error:function(e){Botble.handleError(e),t.removeClass("button-loading")}})}))}}])&&e(n.prototype,o),t}();$(document).ready((function(){(new t).init()}))})();
