# viai-doc-en

This project provides an HTML version of the ViAI help pages at <https://viai-editor.github.io/viai-doc-en/>.

The help pages are automatically updated everyday (if there are any changes).

The Japanese version is at <https://viai-editor.github.io/viai-doc-ja/>, and each page links to the other version.

## for Developers

First of all, to generate everything, just run `make`.
This requires Docker, so prepare it in advance.

Here's what's happening:

1. Run `make html` to generate HTML files before GitHub Pages (Jekyll) processing
    1. Download viai
    2. Collect the necessary \*.txt files
    3. Convert the \*.txt files to \*.html
2. Run `make jekyll-build-by-docker` to output all HTML files for the viai-doc-en site using GitHub Pages (Jekyll)

---

This project was originally derived from [vim-jp/vimdoc-en](https://github.com/vim-jp/vimdoc-en).
