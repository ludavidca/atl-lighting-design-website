import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from urllib.parse import urlparse
import os

class WordPressScraper(CrawlSpider):
    name = 'wordpress_scraper'
    allowed_domains = ['atllightingdesign.com']
    start_urls = ['https://atllightingdesign.com/art-culture/']

    rules = (
        Rule(LinkExtractor(allow_domains=allowed_domains), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        # Extract all links
        links = response.css('a::attr(href)').getall()
        
        # Extract all image URLs
        img_urls = response.css('img::attr(src)').getall()

        # Ensure image URLs are absolute
        img_urls = [response.urljoin(url) for url in img_urls]

        yield {
            'url': response.url,
            'links': links,
            'image_urls': img_urls,
        }

# Scrapy settings
custom_settings = {
    'ITEM_PIPELINES': {'scrapy.pipelines.images.ImagesPipeline': 1},
    'IMAGES_STORE': 'scraped_images',
    'USER_AGENT': 'MyWordPressScraper/1.0',
    'ROBOTSTXT_OBEY': True,
    'DOWNLOAD_DELAY': 1,
}

# Run the spider
if __name__ == "__main__":
    from scrapy.crawler import CrawlerProcess
    from scrapy.utils.project import get_project_settings

    process = CrawlerProcess(get_project_settings())
    process.crawl(WordPressScraper)
    process.start()