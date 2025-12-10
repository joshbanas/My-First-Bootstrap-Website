<script>
  function openImage(src) {
    document.getElementById("modalImage").src = src;
    var modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
</script>