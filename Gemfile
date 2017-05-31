source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'mysql2'
gem 'rails', '~> 5.1.1'

gem 'puma', '~> 3.7'
gem 'redis-namespace'
gem 'redis-rack-cache'
gem 'redis-rails'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'

group :development, :test do
  gem 'awesome_print'
  gem 'byebug'
  gem 'capybara', '~> 2.13'
  gem 'pry-rails'
  gem 'selenium-webdriver'
end

group :development do
  # gem 'flamegraph'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # gem 'memory_profiler'
  # gem 'rack-mini-profiler'
  gem 'rubocop', require: false
  gem 'rubycritic', require: false
  gem 'sandi_meter', require: false,
      github: 'roooodcastro/sandi_meter', branch: 'one-line-method-fix'
  # gem 'stackprof'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'factory_girl_rails'
  gem 'rspec-collection_matchers'
  gem 'rspec-html-matchers'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda-matchers', require: false
  gem 'simplecov', require: false
end
