source "http://rubygems.org"

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem "jekyll"
gem 'kramdown'
gem 'jekyll-sitemap'
gem 'jekyll-seo-tag'
gem 'jekyll-paginate-v2'
gem 'github-pages-health-check'
gem 'github-pages', versions['github-pages']
