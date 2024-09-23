window.BENCHMARK_DATA = {
  "lastUpdate": 1727131987289,
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131977907,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2580162.730072283,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82214.92256114322,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3037.917780220078,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10906.545765337998,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 74.40654603380004,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2.7275812156988954,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49901.095306063165,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1298.8415813951049,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 26.63353088882306,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5423.322114007952,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 158.2267001204045,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.322078682939701,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3154.0965255997617,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2117.0601231255055,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 168.97779775393244,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 349603.18590283813,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12042.382037709052,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 202.15187613682915,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 256053.07366305985,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 215.07992235732993,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 194529.10771919243,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5492.5735749585265,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 125.9145593103339,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 149432.36213639847,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9620.324441419158,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 843.6101092950967,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 78.35718773120807,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1036.6655120986752,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 92.19313104934258,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.7951716529258819,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131979415,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2586661.1131487596,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82676.81786993363,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3041.524977861491,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21542.404699485433,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 185.51683124558727,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.640519373176681,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 50578.73983346706,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1324.353420908322,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 27.161831878210723,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5423.893577097291,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 154.4260463902136,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.071092890655802,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 6049.791303681061,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2871.0079089617425,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 174.99883375007565,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 239359.79513520747,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5897.1668933036735,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 143.64036214833254,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 127789.18718145583,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4470.834075422169,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 136.66684025754031,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 156079.55756029274,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3571.352890626067,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 97.78606021745274,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 99380.72899741329,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2951.83198259693,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 90.71832830643388,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9713.820972912807,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 886.69605996685,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 75.8698380090443,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1055.6614558956908,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 91.63866572545957,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8229031017444364,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131979921,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2581257.808615077,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82605.40137078609,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3037.104409242707,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21602.218556673357,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 187.6298717257238,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.610257546463285,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49667.422531025506,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1304.192793382719,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 27.14658923426802,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3322.193205071761,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 158.81779926734146,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.130306773707924,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5050.24288557958,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2616.3923189257875,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 173.10235481247682,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 347301.6499108462,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12144.267613446718,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 202.86104004251646,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 289450.5770874631,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10908.268852210216,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 244.10018913724286,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 199687.1464982274,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5515.2612255795275,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 123.06063946324905,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 137468.01098111525,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5287.181849026479,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 127.67074155324433,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9808.286989039347,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 896.9699179321964,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 78.01970704623575,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1072.754930398881,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 92.59545436217725,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.837211649902173,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131979954,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2574228.0742830695,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82530.64417907756,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3032.655662517717,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 30624.43571629253,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 340.4487762512096,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 9.50318441412743,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49352.715120637324,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1305.494402721278,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 25.95452772660637,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5409.3727107628365,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 153.9749318393298,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.057960457045383,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3651.42392639991,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2116.442726749106,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 162.5422854699663,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 305499.63596422103,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12393.696148832212,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 214.8184172926483,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 208123.99124262613,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10487.043488354377,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 242.83773599383198,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 199010.1498790027,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5701.696472583154,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 134.83951293550558,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 144106.09548051024,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5359.264097662392,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 131.36076264229294,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9768.807344348383,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 889.7938385748785,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 77.3805728553877,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1032.9750575586331,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 91.06785817291363,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8260186160748864,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131981876,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2572374.0023713117,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82757.25834991534,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3039.943635186575,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21403.365697677677,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 182.18244564640509,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.473980601141437,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 50954.391478249054,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1303.5912825810267,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 25.42634235503556,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5385.269310180346,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 152.1530072239234,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.463071815297951,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4047.534341257784,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2161.4968837954725,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 167.3305660594332,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 266620.7202693846,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 11333.16049755869,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 192.61031253559247,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 216368.0470634702,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 11857.14815725047,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 237.72660304095862,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 184265.30927837113,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4450.62619195354,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 112.36769519505702,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 142654.9248748865,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5106.944832465139,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 131.0713696852504,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9284.978009783044,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 856.1539748206934,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 75.98999780372975,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 990.8155838799859,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 87.2070504227507,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.835958562720237,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131981619,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2581726.144295662,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82728.9699547594,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3034.48887484348,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 29844.087852107885,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 331.5292380176743,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 9.449331262708839,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49992.82501861822,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1282.015579547181,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 24.899080659252565,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5424.208351695543,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 151.20190278813575,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.335344779512757,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5012.571848166529,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2673.6999765130026,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 175.6630354945518,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 314808.77235255967,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12210.24849736077,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 208.14805037706756,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 242350.53300736824,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10864.94325408388,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 231.26221441806396,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 201279.70473978212,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5512.327509722655,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 120.09473040869642,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 147636.87724665835,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5292.886590545897,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 127.0797569532964,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9465.0738308979,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 877.9444736766372,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 74.72238617937562,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1017.9772638521227,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 89.83129988868582,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8712843983581229,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131982467,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2587862.522683598,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82707.55549118649,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3043.5702904586415,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21454.478277866994,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 184.3374400172933,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.497989408703096,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49928.64825838226,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1300.582013810171,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 25.77251325906872,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5425.171112407275,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 154.56921750862548,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.0981722564618,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4970.386955913614,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2492.7073850466545,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 166.11523940457738,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 330419.286372351,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12124.347248667858,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 202.24211001279934,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 213046.69635472793,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10375.177379247309,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 286.5802002011385,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 185892.43870941867,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 6015.50971210881,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 125.52200786387881,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 149405.0278133944,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4697.025723672942,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 119.17590660634391,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9919.403032938351,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 886.9784148004355,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 77.33694997959942,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1044.8540094875061,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 94.71004379015476,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8265936917046544,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131987083,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2585544.677249838,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82542.87046242355,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3038.041237122121,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21649.773451609362,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 189.207958681358,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.520577890586963,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 50183.94656850244,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1297.456442175904,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 26.067463112464555,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5419.944804776126,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 158.2815101311692,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.587374098602349,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5387.6339897179305,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2738.0468868333082,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 174.95454603378107,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 296731.6245112931,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12122.678425047947,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 209.45786014145355,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 211647.94781394812,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10265.314427212472,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 197.28644324278764,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 186527.06012216918,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5517.065126126586,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 123.62746264004737,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 141204.57727788738,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4403.400366795941,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 122.36107621320014,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9736.950105439531,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 879.5455231175602,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 73.55415828148197,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1026.665306791355,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 90.47874103701353,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.824648705000671,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}