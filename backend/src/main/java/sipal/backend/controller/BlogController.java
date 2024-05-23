package sipal.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sipal.backend.entity.Blog;
import sipal.backend.model.WebResponse;
import sipal.backend.service.BlogService;

import java.util.List;

@RestController
public class BlogController {
    @Autowired
    private BlogService blogService;

    @CrossOrigin
    @GetMapping(path = "/api/blog")
    public WebResponse<List<Blog>> getAll() {
        List<Blog> blogs = blogService.getAll();
        return WebResponse.<List<Blog>>builder().data(blogs).build();
    }
}
