package sipal.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sipal.backend.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
