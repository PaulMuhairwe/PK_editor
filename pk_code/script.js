function updateOutput() {
    const html = document.getElementById('html').value;
    const css ="<style>" + document.getElementById('css').value + "</style>";
    const js = "<script>" + document.getElementById('js').value + "</script>";
    const output = document.getElementById('preview');
    output.contentWindow.document.open();
    output.contentWindow.document.write(html + css + js);
    output.contentWindow.document.close ();

}
document.getElementById('html').addEventListener('input', updateOutput);
document.getAnimations('css').addEventListener('input' , updateOutput);
document.getElementById('js').addEventListener('input' , updateOutput);

updateOutput();