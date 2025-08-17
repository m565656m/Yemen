// واجهة تفاعلية بسيطة للصفحة: التفاعلات والـ quiz
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2184834453640420"
     crossorigin="anonymous"></script>
document.addEventListener('DOMContentLoaded', () => {
  // Quiz interaction
  const options = document.querySelectorAll('.quiz-answers .option');
  const result = document.getElementById('quiz-result');
  options.forEach(btn => {
    btn.addEventListener('click', () => {
      const correct = btn.dataset.correct === 'true';
      // تصفية المظهر
      options.forEach(b => b.classList.remove('correct','wrong'));
      if (correct) {
        btn.classList.add('correct');
        result.textContent = 'إجابتك صحيحة ✅ — جيد جداً!';
      } else {
        btn.classList.add('wrong');
        result.textContent = 'خطأ ❌ — حاول مرة أخرى أو راجع قسم "أمثلة آمنة".';
      }
    });
  });
});
