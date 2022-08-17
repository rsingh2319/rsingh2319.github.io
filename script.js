for content in contents:
  text = review.get_text().strip()
  clean_reviews.append(Text)

  x=     vectorize(clean_reviews, vect)
  pred_array = model.predict(x)

for i in range (len(clean_reviews)):
  print(clean_reviews[i])
  graph_results(pred_array, i)