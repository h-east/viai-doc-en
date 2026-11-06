.PHONY: all html clean

JEKYLL_WORKDIR=target/jekyll-work
JEKYLL_OUTDIR=target/_site

all:
	$(MAKE) html
	$(MAKE) jekyl-build-by-docker

html-prepare: viai/runtime/doc target/html/doc
	rm -f target/html/doc/*.txt
	cp viai/runtime/doc/*.txt target/html/doc

html: html-prepare
	-cd target/html/doc ; vim -eu ../../../tools/buildhtml.vim -c "qall!"

viai/runtime/doc:
	git clone --depth=1 https://github.com/viai-editor/viai.git

target/html/doc:
	mkdir -p $@

clean:
	rm -rf target

distclean: clean
	rm -rf viai

jekyll-build-prepare:
	mkdir -p $(JEKYLL_WORKDIR)
	cp target/html/doc/*.html $(JEKYLL_WORKDIR)
	cp -Ru src/* $(JEKYLL_WORKDIR)

jekyll-build: jekyll-build-prepare
	jekyll build -s $(JEKYLL_WORKDIR) -d $(JEKYLL_OUTDIR)

jekyll-build-by-docker: jekyll-build-prepare
	./tools/docker_jekyll jekyll build -s $(JEKYLL_WORKDIR) -d $(JEKYLL_OUTDIR)

jekyll-clean:
	rm -rf $(JEKYLL_WORKDIR) $(JEKYLL_OUTDIR)

.PHONY: jekyll-build-prepare jekyll-build jekyll-build-by-docker jekyll-clean
