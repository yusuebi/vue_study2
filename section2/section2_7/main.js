var app = new Vue ({
  el: '#app',
  data: {
    answer: []
  },
  computed: {
    //　チェック内容を連結した文字列を返す算出プロパティ
    selection: function() {
      return this.answer.join();
    }
  }
});
