class Api::V1::PlanesController < Api::V1::BaseController

  def index
    respond_with Plane.all
  end

  def create
    respond_with :api, :v1, Plane.create(plane_params)
  end

  def destroy
    respond_with Plane.destroy(params[:id])
  end

  def update
    plane = Plane.find(params[:id])
    plane.update_attributes(plane_params)
    respond_with plane, json: plane
  end

  private

  def plane_params
    params.require(:plane).permit(:model_id, :description, :datetime, :longitude, :latitude, :elevation)
  end

end
