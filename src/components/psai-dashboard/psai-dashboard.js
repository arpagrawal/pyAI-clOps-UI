import endpoints from '../../endpoint';

export default {
  name: 'psai-dashboard',
  components: {},
  props: {},
  data() {
    return {
      search: '',
      modelList: [],
      displayError: false,
      isDataLoaded: false,
    };
  },
  directives: {},
  computed: {
    filteredList() {
      if (this.modelList) {
        return this.modelList.filter(
          (model) => model.name.toLowerCase().includes(this.search.toLowerCase()),
        );
      }
      return [];
    },
    noResults() {
      return this.filteredList.length === 0;
    },
  },
  mounted() {},
  created() {
    this.axios
      .get(endpoints.modelData)
      .then(this.handleModelDataResponse)
      .catch(this.handleModelDataError);
  },
  methods: {
    handleModelDataResponse(res) {
      this.modelList = res.data.Models;
      this.isDataLoaded = true;
    },
    handleModelDataError() {
      this.displayError = true;
    },
  },
};
