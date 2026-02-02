bundle exec jekyll build
bundle exec htmlproofer \
    --allow_hash_href ./_site \
    --ignore-urls "/assets/js/vendor/lunr.min.js,/assets/js/just-the-docs.js,https://github.com/.*"
