// 프롬프트 복사 버튼 동작
document.querySelectorAll('.prompt').forEach(function (box) {
  var btn = box.querySelector('.copy-btn');
  var pre = box.querySelector('pre');
  if (!btn || !pre) return;

  btn.addEventListener('click', function () {
    var text = pre.innerText;

    function markCopied() {
      var original = '복사';
      btn.textContent = '복사됨 ✓';
      btn.classList.add('done');
      setTimeout(function () {
        btn.textContent = original;
        btn.classList.remove('done');
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(fallback);
    } else {
      fallback();
    }

    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); markCopied(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
});
