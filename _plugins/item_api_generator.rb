module Jekyll
    class ArchiveIndex < Page
        def initialize(site, base, dir, post)
            @site = site
            @base = base
            @dir = dir
            @name = 'index.json'
            self.process(@name)

            if post.data["category"] == 'press'
                self.read_yaml(File.join(base, '_layouts'), 'press-api.html')
            end

            if post.data["category"] == 'projects'
                self.read_yaml(File.join(base, '_layouts'), 'project-api.html')
            end

            self.data['post'] = post
        end
    end

    class ArchiveGenerator < Generator
        priority :low

        def generate(site)
            site.posts.docs.each do |post|
                if post.data["category"] == 'press'
                    index = ArchiveIndex.new(site, site.source, 'api/v1/press/' + post.data["slug"], post)
                end

                if post.data["category"] == 'projects'
                    index = ArchiveIndex.new(site, site.source, 'api/v1/projects/' + post.data["slug"], post)
                end

                index.render(site.layouts, site.site_payload)
                index.write(site.dest)
                site.pages << index
            end
        end
    end
end
