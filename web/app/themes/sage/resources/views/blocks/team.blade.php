<div class="container-xxl py-5 team-block">
  <div class="container">
    <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
      <p class="section-title bg-white text-center text-primary px-3">Our Team</p>
      <h1 class="mb-5">Experienced Team Members</h1>
    </div>
    <div class="row g-4">
      @if ($members)
        @foreach ($members as $member)
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item rounded p-4">
              <img class="img-fluid rounded mb-4" src="{{ $member['picture']['url'] }}" alt="{{ $member['name'] }}">
              <h5>{{ $member['name'] }}</h5>
              <p class="text-primary">{{ $member['position'] }}</p>
              <div class="d-flex justify-content-center">
                <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href="{{ $member['facebook'] }}"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href="{{ $member['twitter'] }}"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href="{{ $member['instagram'] }}"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        @endforeach
      @else
        <p>{{ $block->preview ? 'Add team members...' : 'No team members found!' }}</p>
      @endif
    </div>
  </div>
</div>
