window.BENCHMARK_DATA = {
  "lastUpdate": 1727122936060,
  "repoUrl": "https://github.com/Breus/json-masker",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "committer": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "distinct": true,
          "id": "81b0c9c41ffa26e0b75d26fa7bfcb58bbe1aff92",
          "message": "Testing pipeline",
          "timestamp": "2024-09-23T22:20:24+02:00",
          "tree_id": "bc3b1b89b2a80b7de8ab91324c5b0c54d2a306fb",
          "url": "https://github.com/Breus/json-masker/commit/81b0c9c41ffa26e0b75d26fa7bfcb58bbe1aff92"
        },
        "date": 1727122935916,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"false\",\"mode\":\"mask\"} )",
            "value": 11828583.72128137,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"false\",\"mode\":\"allow\"} )",
            "value": 12064789.849997655,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"true\",\"mode\":\"mask\"} )",
            "value": 8437120.57319207,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"true\",\"mode\":\"allow\"} )",
            "value": 8583083.547758834,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}