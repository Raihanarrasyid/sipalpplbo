package sipal.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sipal.backend.entity.Blog;
import sipal.backend.repository.BlogRepository;

import java.util.List;

@Service
public class BlogService {
    private static final Logger logger = LoggerFactory.getLogger(BlogService.class);

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> getAll() {
        logger.info("returing all blogs");
        return blogRepository.findAll();
    }
}
