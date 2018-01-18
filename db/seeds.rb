# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Plane.create({model_id: 1, description: 'Cessna 120', datetime: '2016-10-12 12:00:00 -0500', longitude: 43.2583264, latitude: -81.8149807, elevation: 500})
  Plane.create({model_id: 1, description: 'Cessna 120', datetime: '2016-10-13 12:00:00 -0500', longitude: 42.559112, latitude: -79.286693, elevation: 550})
  Plane.create({model_id: 1, description: 'Cessna 120', datetime: '2016-10-14 12:00:00 -0500', longitude: 43.559112, latitude: -85.286693, elevation: 600})
  Plane.create({model_id: 1, description: 'Cessna 120', datetime: '2016-10-15 12:00:00 -0500', longitude: 42.3119735, latitude: -83.0941179, elevation: 650})

  Plane.create({model_id: 2, description: 'DC-6 Twin Otter', datetime: '2016-10-12 12:00:00 -0500', longitude: 43.459112,latitude: -80.386693, elevation: 500})
  Plane.create({model_id: 2, description: 'DC-6 Twin Otter', datetime: '2016-10-13 12:00:00 -0500', longitude: 42.459112,latitude: -79.386693, elevation: 550})
  Plane.create({model_id: 2, description: 'DC-6 Twin Otter', datetime: '2016-10-14 12:00:00 -0500', longitude: 43.459112,latitude: -85.386693, elevation: 450})
  Plane.create({model_id: 2, description: 'DC-6 Twin Otter', datetime: '2016-10-15 12:00:00 -0500', longitude: 44.459112,latitude: -81.386693, elevation: 400})

  Plane.create({model_id: 3, description: 'Piper M600', datetime: '2016-10-15 12:00:00 -0500', longitude: 44.459112,latitude: -81.386693, elevation: 500})
  Plane.create({model_id: 3, description: 'Piper M600', datetime: '2016-10-15 12:00:00 -0500', longitude: 45.459112,latitude: -82.386693, elevation: 600})
  Plane.create({model_id: 3, description: 'Piper M600', datetime: '2016-10-15 12:00:00 -0500', longitude: 46.459112,latitude: -83.386693, elevation: 700})
  Plane.create({model_id: 3, description: 'Piper M600', datetime: '2016-10-15 12:00:00 -0500', longitude: 47.459112,latitude: -84.386693, elevation: 800})
  Plane.create({model_id: 3, description: 'Piper M600', datetime: '2016-10-15 15:00:00 -0500', longitude: 48.459112,latitude: -85.386693, elevation: 900})

  Plane.create({model_id: 4, description: 'Art Boom 6500', datetime: '2016-10-15 15:00:00 -0500', longitude: 43.7634618,latitude: -79.3688191, elevation: 800})
  Plane.create({model_id: 4, description: 'Art Boom 6500', datetime: '2016-06-13 16:20:38 -0500', longitude: 43.8001468,latitude: -79.2342365, elevation: 400})
  Plane.create({model_id: 4, description: 'Art Boom 6500', datetime: '2016-04-13 14:20:38 -0500', longitude: 44.51165,latitude: -80.1239422, elevation: 550})
  Plane.create({model_id: 4, description: 'Art Boom 6500', datetime: '2016-04-13 14:20:38 -0500', longitude: 43.1501439,latitude: -79.0504945, elevation: 300})
