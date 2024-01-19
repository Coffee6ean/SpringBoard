# POST and Form Data - 

#*demo/test_app.py*
def test_color_submit(self):
    with app.test_client() as client:
        resp = client.post('/fav-color',
                           data={'color': 'blue'})
        html = resp.get_data(as_text=True)

        self.assertEqual(resp.status_code, 200)
        self.assertIn('Woah! I like blue, too', html)

### **Testing Redirects**
#*demo/test_app.py*
def test_redirection(self):
    with app.test_client() as client:
        resp = client.get("/redirect-me")

        self.assertEqual(resp.status_code, 302)
        self.assertEqual(resp.location, "http://localhost/")
#`follow_redirects=True` makes new request when response redirects:

#*demo/test_app.py*
def test_redirection_followed(self):
    with app.test_client() as client:
        resp = client.get("/redirect-me", follow_redirects=True)
        html = resp.get_data(as_text=True)

        self.assertEqual(resp.status_code, 200)
        self.assertIn('<h1>Color Form</h1>', html)