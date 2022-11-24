package com.org.ecommerce.dao;

import com.org.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
//Spring Data REST is built on top of the Spring Data project and makes it easy to build
// hypermedia-driven REST web services that connect to Spring Data repositories

// The @RepositoryRestResource annotation is optional and is used to customize the REST endpoint.
// If we decided to omit it, Spring would automatically create an endpoint at “/productCategorys” instead of “/product-category“.

// http://localhost:8080/api would expose all the available api's

// In this specific case we can use http://localhost:8080/api/product-category which is configured
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
