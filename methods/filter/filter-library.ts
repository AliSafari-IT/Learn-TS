/**
 * 
Certainly! Here's a problem description that will help you practice and learn the filter() method in TypeScript:

Problem: Filtering a Library Database
Imagine you have a library database represented as an array of book objects. Each book object has the following properties:

title: string
author: string
yearPublished: number
genres: string[] (an array of genres the book belongs to)
Your task is to write a TypeScript function that filters this array of books based on certain criteria. The function should be able to:

Filter books published after a specific year.
Filter books that belong to a specific genre.
Requirements:
    Create a function filterBooks that:
    1.  Takes an array of Book objects, a publication year, and a genre as parameters.
    2.  Returns an array of Book objects that were published after the specified year and belong to the specified genre.
    3.  Use the filter() method to achieve the filtering based on the given criteria.
 */

import { Book, bestSellerBooks, hydrologyBooks, psychologyBooks } from "../../data/library";

    function filterByBooksGenre(books: Book[], genre: string, year?: number): Book[] {
        const filtered = books.filter((book) => book.genres.includes(genre));
        return filtered;
      }
      
      // Example usage of the filterBooks function with the bestSellerBooks array:
      const filteredBooks = filterByBooksGenre(bestSellerBooks,'science fiction');
      console.log(filteredBooks);

      function filterRecentBooks (books: Book[], year: number): Book[] {
        return books.filter((book) => book.yearPublished > year);
      }
      
      // psychologyBooks: Returns an array of Book objects that were published after the specified year and belong to the specified genre
      const filteredPsychologyBooks = filterByBooksGenre(psychologyBooks, "Self-help", 2019);
      const setPsych = new Set(filteredPsychologyBooks.sort( (a, b) => a.yearPublished - b.yearPublished).map((book) => [book.yearPublished, book.title]));
      console.log(filteredPsychologyBooks, setPsych);
      // Example usage of the filterBooks function with the hydrologyBooks array:
      // hydrologyBooks: list the last 2 years of Hydrology books
      const filteredHydrologyBooks = filterRecentBooks(hydrologyBooks, 2019);
      const hydrSet = new Map(filteredHydrologyBooks.sort( (a, b) => a.yearPublished - b.yearPublished).map((book) => [book.yearPublished, book.title]));
      console.log(filteredHydrologyBooks, hydrSet);

      // run with: npx ts-node methods/filter/filter-library.ts